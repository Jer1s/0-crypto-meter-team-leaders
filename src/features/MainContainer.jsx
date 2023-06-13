/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const containerStyle = css`
  border-radius: 2.5rem;
  padding: 3.6rem 4.8rem 6rem;
  background-color: var(--white);

  &:nth-of-type(1) {
    padding-bottom: 8rem;
  }

  @media (max-width: 1199px) {
    padding: 0;
    
    &:nth-of-type(1) {
      padding-bottom: 0;
    }
  }
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid var(--gray1);
  padding-bottom: 3.2rem;
  height: 6.4rem;

  @media (max-width: 767px) {
    padding-bottom: 1.8rem;
    height: 4.2rem;
  }
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
