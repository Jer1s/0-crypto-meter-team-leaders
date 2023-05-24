/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const layoutStyle = css`
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const sidebarStyle = css`
  position: fixed;
  width: 44.5rem;
  height: calc(100vh - 13.5rem);
  max-height: 169.4rem;
  left: 3.6rem;

  @media (min-width: 1920px) {
    left: calc(3.6rem + (100vw - 192rem) / 2);
  }

  @media (max-width: 1199px) {
    position: static;
    padding: 0 2.4rem;
    margin: 1rem 0 6rem;
    width: 100%;
    height: 16.8rem;
  }

  @media (max-width: 767px) {
    margin: 0.8rem 0 5.2rem;
    height: 18.4rem;
  }
`;

const mainStyle = css`
  box-sizing: content-box;
  padding: 0 3.6rem 2.4rem 50.5rem;
  margin: 0 auto;
  width: calc(100vw - 58rem);
  max-width: 137.9rem;

  @media (max-width: 1199px) {
    padding: 0 2.4rem;
    width: 93%;
    
    &:last-child {
      padding-top: 8rem;
    }
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
`;

const HomePageLayout = ({ children }) => {
  return (
    <main css={layoutStyle}>
      {children.map((child) => {
        return (
          <div css={child.key === 'sideBar' ? sidebarStyle : mainStyle} key={child.key}>
            {child}
          </div>
        );
      })}
    </main>
  );
};

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageLayout;
