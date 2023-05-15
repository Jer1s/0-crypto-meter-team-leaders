import { BASE_CURRENCY, EXCHANGE_RATE } from 'utils/constants';

const currencyConverter = (price, targetCurrency) => {
  if (targetCurrency === BASE_CURRENCY) {
    return price;
  }
  return price * EXCHANGE_RATE[`${BASE_CURRENCY}TO${targetCurrency}`];
};

export default currencyConverter;
