/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const layoutStyle = css`
  max-width: 1920px;
  margin: 0 auto;
`;

const sidebarStyle = css`
  position: fixed;
  width: 44.5rem;
  left: 3.6rem;
  height: calc(100vh - 13.5rem);
  
  @media (min-width: 1920px) {
    left: calc(3.6rem + (100vw - 1920px) / 2);
  }

  @media (max-width: 1199px) {
    position: relative;
    width: 100%;
    left: 2.4rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 5.2rem;
    left: 1.6rem;
  }
`;

const mainStyle = css`
  box-sizing: content-box;
  padding: 0 3.6rem 2.4rem 50.5rem;
  margin: 0 auto;
  width: calc(100vw - 56rem);
  max-width: 136rem;

  @media (max-width: 1199px) {
    padding: 0;
    width: 90%;
    
    &:last-child {
      padding-top: 8rem;
    }
  }
`;

const HomePageLayout = ({ children }) => {
  return (
    <main css={layoutStyle}>
      {children.map((child) => {
        return (
          child.key === 'sideBar' ? (
            <aside css={sidebarStyle} key={child.key}>
              {child}
            </aside>
          ) : (
            <div css={mainStyle} key={child.key}>
              {child}
            </div>
          )
        );
      })}
    </main>
  );
};

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageLayout;
