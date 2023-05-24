import { useQuery } from '@tanstack/react-query';
import { getCoinsHistory } from 'api/getCoins';

const useCoinsHistoryJeris = ({ formattedDate, cryptoId }) => {
  return useQuery({
    queryKey: ['coinsHistory'],
    queryFn: () => { return getCoinsHistory({ formattedDate, cryptoId }); },
    enabled: false,
    onSuccess: (data) => {
      return data.market_data.current_price.usd;
    },
  });
};

export default useCoinsHistoryJeris;
