import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'pages/HomePage';
import CoinDetails from 'components/CoinDetails';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HomePage />
      <CoinDetails />
    </RecoilRoot>
  );
};

export default App;
