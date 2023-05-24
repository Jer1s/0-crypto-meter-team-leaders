import api from 'api';

export const getCoinsMarkets = async (page = 1) => {
  const { data } = await api.get(
    `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_pro_api_key=${import.meta.env.VITE_X_CG_PRO_API_KEY}`,
  );
  return data;
};

export const getCoinsHistory = async ({ dateItem = '01-01-2023', cryptoIdItem = 'bitcoin' }) => {
  const { data } = await api.get(
    `/coins/${cryptoIdItem}/history?date=${dateItem}&localization=ko&x_cg_pro_api_key=CG-ReEFUZC8FpbDTSJ6AmbKy3m1`,
  );
  return data;
};
