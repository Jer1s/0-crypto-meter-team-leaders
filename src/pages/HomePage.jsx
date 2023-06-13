import HomePageLayout from "features/HomePageLayout";
import CoinDetails from "features/CoinDetails";
import CoinScenarioForm from "features/CoinScenarioForm";
import CryptoMarketCap from "features/CryptoMarketCap";
import Gnb from "features/Gnb";
import useAtomStorageSync from "hooks/useAtomStorageSync";
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
