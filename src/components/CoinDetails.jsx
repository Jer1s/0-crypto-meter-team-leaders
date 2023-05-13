import React from 'react';
import MainContainer from 'components/MainContainer';
import styled from '@emotion/styled';
import kakaotalk from 'assets/kakaotalk.png';
import facebook from 'assets/facebook.png';
import share from 'assets/share.png';
import KakaoShareButton from 'components/KakaoShareButton';

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
    margin-right: 1.5rem;
    & img {
      display: block;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }

    & .kakao-share-button button {
      background-color: #fff;
      border: none;
    }
  `;

  return (
    <MainContainer>
      <header>
        <CoinInfo>
          <img src={share} alt="코인아이콘" />
          <p>coin</p>
        </CoinInfo>
        <SocialIconGroup>
          <KakaoShareButton />
          <img src={facebook} alt="페이스북" />
          <img src={share} alt="링크복사" />
        </SocialIconGroup>
      </header>
      <main />
    </MainContainer>
  );
};

export default CoinDetails;
