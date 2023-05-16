import HomeMainLayout from 'components/HomeMainLayout';
import CoinDetails from 'components/CoinDetails';
import CryptoMarketCapList from 'components/CryptoMarketCapList';
import Gnb from 'components/Gnb';

const HomePage = () => {
  return (
    <>
      <Gnb />
      <HomeMainLayout>
        <CoinDetails />
        <CryptoMarketCapList />
      </HomeMainLayout>
    </>
  );
};

export default HomePage;
