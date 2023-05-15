import styled from '@emotion/styled';
import facebook from 'assets/facebook.png';
import share from 'assets/share.png';
import MainContainer from 'components/MainContainer';
import CoinScenarioResult from './CoinScenarioResult';
import CoinChart from './CoinChart';

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

const CoinDetails = () => {
  return (
    <MainContainer>
      <header>
        <CoinInfo>
          <img src={share} alt="Coin Icon" />
          <p>bitcoin</p>
        </CoinInfo>
        <SocialIconGroup>
          {/* <KakaoShareButton /> */}
          <img src={facebook} alt="Facebook Icon" />
          <img src={share} alt="Link Copy Icon" />
        </SocialIconGroup>
      </header>
      <main>
        <CoinScenarioResult />
        <CoinChart />
      </main>
    </MainContainer>
  );
};

export default CoinDetails;
