import { LOCALE_CURRENCY } from './constants';

const formatPrice = (price, currency) => {
  const { currencyUnit, currencySign } = LOCALE_CURRENCY[currency];
  const convertedPrice = Number.isNaN(price) ? 0 : price;
  let formattedPrice = convertedPrice?.toLocaleString();
  const checkingdecimal = (formattedPrice * 100) % 100;
  if (checkingdecimal !== 0 && checkingdecimal <= 9) {
    formattedPrice = Number(formattedPrice).toFixed(1);
  } else if (checkingdecimal !== 0 && checkingdecimal <= 99) {
    formattedPrice = Number(formattedPrice).toFixed(2);
  }

  if (currency === 'KRW') {
    return `${formattedPrice}${currencyUnit}`;
  }

  if (currency === 'CNY') {
    return `${formattedPrice}${currencySign}`;
  }

  return `${currencySign}${formattedPrice}`;
};

export default formatPrice;
