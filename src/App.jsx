import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'components/pages/HomePage';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HomePage />
    </RecoilRoot>
  );
};

export default App;
