import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <QueryClientProvider client={QueryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <HomePage />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
