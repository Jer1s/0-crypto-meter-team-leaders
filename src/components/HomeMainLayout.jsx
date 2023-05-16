/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const HomeMainLayout = ({ children }) => {
  return (<main css={layoutStyle}>{children}</main>);
};

HomeMainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeMainLayout;
