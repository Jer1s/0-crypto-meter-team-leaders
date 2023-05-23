import {
  Suspense, lazy, useEffect, useState,
} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'pages/HomePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 60 * 1000,
    },
  },
});

const ReactQueryDevtoolsProduction = lazy(async () => {
  return import('@tanstack/react-query-devtools/production').then((d) => {
    return {
      default: d.ReactQueryDevtools,
    };
  });
});

const App = () => {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    window.toggleDevtools = () => { return setShowDevtools((old) => { return !old; }); };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <HomePage />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};

export default App;
