/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const containerStyle = css`
  border-radius: 2.5rem;
  padding: 3.6rem 4.8rem 8rem;
  max-width: 137.9rem;
  background-color: var(--white);
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid var(--gray1);
  padding-bottom: 3.2rem;
  height: 6.4rem;
`;

const MainContainer = ({ children }) => {
  const [header, body] = React.Children.toArray(children);
  return (
    <div css={containerStyle}>
      <div css={headerStyle}>{header.props.children}</div>
      <div>{body}</div>
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
