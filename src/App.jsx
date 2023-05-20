import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HomePage />
    </RecoilRoot>
  );
};

export default App;
