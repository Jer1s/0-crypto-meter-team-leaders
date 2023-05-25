import { useQuery } from '@tanstack/react-query';
import { getCoinsMarkets } from 'api/getCoins';

const useCoinsMarkets = (page) => {
  return useQuery({
    queryKey: ['coinsMarkets', page],
    queryFn: () => { return getCoinsMarkets(page); },
    keepPreviousData: true,
  });
};

export default useCoinsMarkets;
