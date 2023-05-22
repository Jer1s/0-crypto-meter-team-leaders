/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const layoutStyle = css`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto, 1fr;
  padding: 0 3.6rem;
  gap: 2.4rem;

  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;
  }
`;

const sidebarStyle = css`
  grid-row: span 2;
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 3.5rem;
  bottom: 3.5rem;

  @media (min-width: 1920px) {
    left: calc(3.6rem + (100vw - 1920px) / 2);
  }

  @media (max-width: 1199px) {
    position: relative;
    margin-bottom: 6rem;
    height: fit-content;

  }

  @media (max-width: 767px) {
    margin-bottom: 5.2rem;
  }
`;

const mainStyle = css`
  box-sizing: content-box;
  /* padding: 0 3.6rem 2.4rem 50.5rem; */
  margin: 0 auto;
  width: calc(100vw - 56rem);
  max-width: 136rem;
  grid-row: span 1;

  @media (max-width: 1199px) {
    padding: 0;
    width: 100%;
    
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
