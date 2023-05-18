/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const sidebarStyle = css`
  position: fixed;
  width: 44.5rem;
  left: 3.6rem;
`;

const mainStyle = css`
  box-sizing: content-box;
  padding: 1.2rem 3.6rem 1.2rem 50.5rem;
  margin: 0 auto;
  width: calc(100vw - 56rem);
`;

const HomePageLayout = ({ children }) => {
  return (
    <main>
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
