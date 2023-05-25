import { useQuery } from '@tanstack/react-query';
import { getCoinCurrentData } from 'api/getCoins';

const useCoinCurrentData = (cryptoId) => {
  return useQuery({
    queryKey: ['coin', cryptoId],
    queryFn: () => { return getCoinCurrentData(cryptoId); },
    enabled: false,
  });
};

export default useCoinCurrentData;
