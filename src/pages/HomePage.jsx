import CoinDetails from 'components/CoinDetails';
import CoinScenarioForm from 'components/CoinScenarioForm';
import Gnb from 'components/Gnb';

const HomePage = () => {
  return (
    <>
      <Gnb />
      <CoinScenarioForm />
      <CoinDetails />
    </>
  );
};

export default HomePage;
