import HomePageMainLayout from 'components/HomePageMainLayout';
import CoinDetails from 'components/CoinDetails';
// import CoinScenarioForm from 'components/CoinScenarioForm';
import CryptoMarketCap from 'components/CryptoMarketCap';
import Gnb from 'components/Gnb';

const HomePage = () => {
  return (
    <>
      <Gnb />
      {/* <CoinScenarioForm /> */}
      <HomePageMainLayout>
        <CoinDetails />
        <CryptoMarketCap />
      </HomePageMainLayout>
    </>
  );
};

export default HomePage;
