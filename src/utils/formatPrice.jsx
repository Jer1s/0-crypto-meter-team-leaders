import { LOCALE_CURRENCY } from './constants';

const formatPrice = (price, currency) => {
  const { currencyUnit, currencySign } = LOCALE_CURRENCY[currency];
  const convertedPrice = Number.isNaN(price)
    ? 0 : price;
  let formattedPrice = convertedPrice?.toFixed(2);
  const checkingdecimal = (formattedPrice * 100) % 100;
  if (checkingdecimal === 0) {
    formattedPrice = Number(formattedPrice).toFixed(0);
  } else if (checkingdecimal % 10 === 0) {
    formattedPrice = Number(formattedPrice).toFixed(1);
  } else {
    formattedPrice = Number(formattedPrice).toFixed(2);
  }

  formattedPrice = new Intl.NumberFormat().format(formattedPrice);

  if (currency === 'KRW') {
    return `${formattedPrice}${currencyUnit}`;
  }

  if (currency === 'CNY') {
    return `${formattedPrice}${currencySign}`;
  }

  return `${currencySign}${formattedPrice}`;
};

export default formatPrice;
