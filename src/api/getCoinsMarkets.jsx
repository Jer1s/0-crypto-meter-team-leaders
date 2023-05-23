import api from 'api';

const getCoinsMarkets = async (page = 1) => {
  const { data } = await api.get(
      `/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_pro_api_key=${import.meta.env.VITE_X_CG_PRO_API_KEY}`
    );
  return data;
}

export default getCoinsMarkets;
