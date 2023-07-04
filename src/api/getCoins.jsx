import api from 'api';

export const getCoinsMarkets = async (page = 1) => {
  const { data } = await api.get(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`,
  );
  return data;
};

export const getCoinCurrentData = async (cryptoId) => {
  const { data } = await api.get(
    `coins/${cryptoId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
  );
  return data;
};
