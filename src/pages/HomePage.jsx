import HomePageLayout from 'components/HomePageLayout';
import CoinDetails from 'components/CoinDetails';
import CoinScenarioForm from 'components/CoinScenarioForm';
import CryptoMarketCap from 'components/CryptoMarketCap';
import Gnb from 'components/Gnb';
import useAtomStorageSync from 'hooks/useAtomStorageSync';
// import useExchangeRate from 'hooks/useExchangeRate';

const HomePage = () => {
  useAtomStorageSync();
  // useExchangeRate();

  return (
    <>
      <Gnb />
      <HomePageLayout>
        <CoinScenarioForm key="sideBar" />
        <CoinDetails key="main1" />
        <CryptoMarketCap key="main2" />
      </HomePageLayout>
    </>
  );
};

export default HomePage;
