import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const Contianer = styled.div`
  max-width: 137.9rem;
  max-height: 73.3rem;
  border-radius: 2.5rem;
  background-color: #ffffff;
  padding: 3.6rem 4.8rem 8rem;
  margin-bottom: 2.4rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 9.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid black;
  padding-bottom: 3.2rem;
`;

const BodyContainer = styled.div`
  width: 100%;
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

MainContainer.PropsTypes = {
  children: PropTypes.object.isRequired,
};

export default MainContainer;