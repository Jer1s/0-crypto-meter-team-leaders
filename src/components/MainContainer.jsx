import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Contianer = styled.div`
  max-width: 137.9rem;
  min-height: 73.3rem;
  border-radius: 2.5rem;
  background-color: var(--white);
  padding: 3.6rem 4.8rem 0;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid black;
  padding-bottom: 3.2rem;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%
`;

const MainContainer = ({ children }) => {
  const [header, body] = React.Children.toArray(children);
  return (
    <Contianer>
      <HeaderContainer>{header.props.children}</HeaderContainer>
      <BodyContainer>{body}</BodyContainer>
    </Contianer>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
