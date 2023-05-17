import HomePageMainLayout from 'components/HomePageMainLayout';
import CoinDetails from 'components/CoinDetails';
import CoinScenarioForm from 'components/CoinScenarioForm';
import CryptoMarketCapList from 'components/CryptoMarketCapList';
import Gnb from 'components/Gnb';

const HomePage = () => {
  return (
    <>
      <Gnb />
      <CoinScenarioForm />
      <HomePageMainLayout>
        <CoinDetails />
        <CryptoMarketCapList />
      </HomePageMainLayout>
    </>
  );
};

export default HomePage;
