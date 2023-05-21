/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const containerStyle = css`
  border-radius: 2.5rem;
  padding: 3.6rem 4.8rem 8rem;
  background-color: var(--white);

  @media (max-width: 1199px) {
    padding: 0;
  }
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
  return (
    <div css={containerStyle}>
      {children.map((child) => {
        return (
          <div
            css={child.key === 'headerContent' && headerStyle}
            key={child.key}
          >
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
