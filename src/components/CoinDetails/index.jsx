import styled from '@emotion/styled';
import facebook from 'assets/facebook.svg';
import share from 'assets/share.svg';
import MainContainer from 'components/MainContainer';
import CoinScenarioResult from 'components/CoinDetails/CoinScenarioResult';
import CoinChart from './CoinChart';
import KakaoShareButton from './KakaoShareButton';

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

const Button = styled.button`
  border: nonde;
`;

const CoinDetails = () => {
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      // alert('복사에 실패하였습니다');
    }
  };

  return (
    <MainContainer>
      <div key="headerContent">
        <CoinInfo>
          <img src={share} alt="Coin Icon" />
          <p style={{ height: '3.1rem' }}>bitcoin</p>
        </CoinInfo>
        <SocialIconGroup>
          {/* <KakaoShareButton /> */}
          <img src={facebook} alt="Facebook Icon" />
          <Button type="button" onClick={handleCopyClipBoard}><img src={share} alt="Link Copy Icon" /></Button>
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
