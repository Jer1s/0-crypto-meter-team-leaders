import HomePageMainLayout from 'components/HomePageMainLayout';
import CoinDetails from 'components/CoinDetails';
import CryptoMarketCapList from 'components/CryptoMarketCapList';
import Gnb from 'components/Gnb';

const HomePage = () => {
  return (
    <>
      <Gnb />
      <HomePageMainLayout>
        <CoinDetails />
        <CryptoMarketCapList />
      </HomePageMainLayout>
    </>
  );
};

export default HomePage;
