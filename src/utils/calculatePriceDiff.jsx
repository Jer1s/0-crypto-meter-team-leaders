import { BASE_CURRENCY } from 'utils/constants';

export const calculatePriceDiff = (scenarioDataResult, exchangeRate, localeCurrency) => {
  const { currentPrice, historyPrice, buyPrice } = scenarioDataResult;

  if (typeof currentPrice !== 'number' || (typeof historyPrice.USD !== 'number' || typeof historyPrice.KRW !== 'number'
  || typeof historyPrice.JPY !== 'number' || typeof historyPrice.CNY !== 'number' || typeof historyPrice.EUR !== 'number')
|| typeof buyPrice !== 'number') {
    return {
      pastPrice: {
        USD: null, KRW: null, JPY: null, EUR: null, CNY: null,
      },
      price: {
        USD: null, KRW: null, JPY: null, EUR: null, CNY: null,
      },
    };
  } if (!(currentPrice || historyPrice || buyPrice)) {
    return {
      pastPrice: {
        USD: 0, KRW: 0, JPY: 0, EUR: 0, CNY: 0,
      },
      price: {
        USD: 0, KRW: 0, JPY: 0, EUR: 0, CNY: 0,
      },
    };
  }
  const {
    USD, KRW, JPY, EUR, CNY,
  } = historyPrice;
  const amount = (buyPrice / USD);

  const pastPrice = {
    USD: 0, KRW: 0, JPY: 0, EUR: 0, CNY: 0,
  };

  const exchangedRate = (targetCurrency) => {
    return exchangeRate[`${BASE_CURRENCY}TO${targetCurrency}`];
  };
  switch (localeCurrency) {
    case 'USD':
      pastPrice.USD = buyPrice;
      pastPrice.KRW = KRW * amount;
      pastPrice.JPY = JPY * amount;
      pastPrice.EUR = EUR * amount;
      pastPrice.CNY = CNY * amount;
      break;
    case 'KRW':
      pastPrice.USD = USD * amount;
      pastPrice.KRW = buyPrice * exchangedRate('KRW');
      pastPrice.JPY = JPY * amount;
      pastPrice.EUR = EUR * amount;
      pastPrice.CNY = CNY * amount;
      break;
    case 'JPY':
      pastPrice.USD = USD * amount;
      pastPrice.KRW = KRW * amount;
      pastPrice.JPY = buyPrice * exchangedRate('JPY');
      pastPrice.EUR = EUR * amount;
      pastPrice.CNY = CNY * amount;
      break;
    case 'EUR':
      pastPrice.USD = USD * amount;
      pastPrice.KRW = KRW * amount;
      pastPrice.JPY = JPY * amount;
      pastPrice.EUR = buyPrice * exchangedRate('EUR');
      pastPrice.CNY = CNY * amount;
      break;
    case 'CNY':
      pastPrice.USD = USD * amount;
      pastPrice.KRW = KRW * amount;
      pastPrice.JPY = JPY * amount;
      pastPrice.EUR = EUR * amount;
      pastPrice.CNY = buyPrice * exchangedRate('CNY');
      break;
    default:
      pastPrice.USD = 0;
      pastPrice.KRW = 0;
      pastPrice.JPY = 0;
      pastPrice.EUR = 0;
      pastPrice.CNY = 0;
      break;
  }

  const usdPrice = amount * currentPrice;

  const price = {
    USD: usdPrice,
    KRW: usdPrice * exchangedRate('KRW'),
    JPY: usdPrice * exchangedRate('JPY'),
    EUR: usdPrice * exchangedRate('EUR'),
    CNY: usdPrice * exchangedRate('CNY'),
  };
  return {
    pastPrice,
    price,
  };
};
