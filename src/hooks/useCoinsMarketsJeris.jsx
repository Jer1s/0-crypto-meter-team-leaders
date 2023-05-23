import { useQuery } from '@tanstack/react-query';
import getCoinsMarkets from 'api/getCoinsMarkets';

const useCoinsMarketsJeris = (page) => {
  return useQuery({
    queryKey: ['coinsMarkets', page],
    queryFn: () => getCoinsMarkets(page),
    keepPreviousData: true,
  });
}

export default useCoinsMarketsJeris;
