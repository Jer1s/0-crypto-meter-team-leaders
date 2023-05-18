/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const HomePageMainLayout = ({ children }) => {
  return (
    <main css={layoutStyle}>
      {children}
    </main>
  );
};

HomePageMainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageMainLayout;
