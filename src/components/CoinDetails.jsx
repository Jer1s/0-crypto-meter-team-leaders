import React from 'react';
import MainContainer from 'components/MainContainer';
import styled from '@emotion/styled';
import share from 'assets/share.png';

const CoinDetails = () => {
  const CoinInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      font-size: 2.6rem;
      font-weight: 700;
    }

    & img {
      display: block;
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
  `;

  const SocialIconGroup = styled.div`
    width: 11.2rem;
    height: 2.4rem;
    display: flex;
    justify-content: space-between;

    & img {
      display: block;
      width: 2rem;
      height: 2rem;
    }
  `;

  return (
    <MainContainer>
      <header>
        <CoinInfo>
          <img src={share} alt="하이요" />
          <p>coin</p>
        </CoinInfo>
        <SocialIconGroup>
          <img src={share} alt="하이요" />
          <img src={share} alt="하이요" />
          <img src={share} alt="하이요" />
        </SocialIconGroup>
      </header>
      <main>방지용</main>
    </MainContainer>
  );
};

export default CoinDetails;
