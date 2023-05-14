/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const buttonStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 11px 15px;
  height: 4rem;
  border: 0.1rem solid var(--gray7);
  border-radius: 1.2rem;
`;

const NavButton = ({ children }) => {
  return (
    <button type="button" css={buttonStyle}>{children}</button>
  );
};

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavButton;
