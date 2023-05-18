/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import facebook from 'assets/facebook.svg';
import share from 'assets/share.svg';
import MainContainer from 'components/MainContainer';
import CoinScenarioResult from 'components/CoinDetails/CoinScenarioResult';
import { useRecoilValue } from 'recoil';
import scenarioOutputAtom from 'recoils/scenarioData/scenarioOutputAtom';
import CoinChart from './CoinChart';
import KakaoShareButton from './KakaoShareButton';
import scenarioData from './mock';

const CoinInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 0;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;

  & img {
    display: block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  & button {
    background-color: var(--white);
    border: none;
  }
`;

const toolTipStyle = css`
  background-color: var(--gray3);
  border: var(--gray3) solid 0.1rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.025rem;
  margin-top: 0.68rem;
  padding: 0.8rem 1.1rem;
  position: absolute;
  z-index: 1;
  width: 7rem;
  height: 3rem;
  text-align: center;

  &:after {
  border-color: var(--gray3) transparent;
  border-style: solid;
  border-width: 0 0.6rem 0.8rem 0.65rem;
  content: '';
  display: block;
  left: 0.55rem;
  position: absolute;
  top: -0.7rem;
  width: 0;
  z-index: 1;
}

  &:before {
  border-color: var(--gray3) transparent;
  border-style: solid;
  border-width: 0 0.6rem 0.8rem 0.65rem;
  content: '';
  display: block;
  left: 0.5rem;
  position: absolute;
  top: -0.7rem;
  width: 0;
  z-index: 0;
}
`;

const Button = styled.button`
  position: relative;
  border: nonde;
`;

const CoinDetails = () => {
  const [isCopy, setisCopy] = useState(false);
  const data = useRecoilValue(scenarioOutputAtom);
  const { userInputData } = data;
  const { coinType, image } = userInputData;

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setisCopy(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setisCopy(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isCopy]);

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://naver.com/');
  };

  return (
    <MainContainer>
      <div key="headerContent">
        <CoinInfo>
          <img src={image} alt="Coin Icon" />
          <p style={{ height: '3.1rem' }}>{coinType}</p>
        </CoinInfo>
        <SocialIconGroup>
          {/* <KakaoShareButton /> */}
          <Button type="button" onClick={shareFacebook}>
            <img src={facebook} alt="Facebook Icon" />
          </Button>
          <Button type="button" onClick={handleCopyClipBoard}>
            <img src={share} alt="Link Copy Icon" />
            {isCopy && <div css={toolTipStyle}>복사완료</div>}
          </Button>
        </SocialIconGroup>
      </div>
      <div key="bodyContent">
        <CoinScenarioResult />
        <CoinChart />
      </div>
    </MainContainer>
  );
};

export default CoinDetails;
