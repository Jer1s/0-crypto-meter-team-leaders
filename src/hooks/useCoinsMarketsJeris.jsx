import { useQuery } from '@tanstack/react-query';
import api from 'api';
import parseMarketCapData from 'utils/parseMarketCapData';

const useCoinsMarketsJeris = (page) => {
  return useQuery(['coinsMarkets', page], async () => {
    const { data } = await api.get(`/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_pro_api_key=${import.meta.env.VITE_X_CG_PRO_API_KEY}`);
    return parseMarketCapData(data);
  });
};

export default useCoinsMarketsJeris;
