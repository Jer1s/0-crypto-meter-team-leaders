export const CRYPTO_NAME = Object.freeze({
  bitcoin: 'Bitcoin',
  dogecoin: 'Dogecoin',
  ethereum: '이더리움',
  'usd-coin': 'USD Coin',
  'staked-ether': 'Lido Staked Ether',
  'ethereum-classic': '이더리움클래식',
  'internet-computer': 'Internet Computer',
  'true-usd': '트루USD',
  'crypto-com-chain': 'Cronos',
});

export const LOCALE_CURRENCY = Object.freeze({
  KRW: {
    currencyUnit: '원',
    currencySign: '₩',
  },
  USD: {
    currencyUnit: 'USD',
    currencySign: '$',
  },
  JPY: {
    currencyUnit: 'YEN',
    currencySign: '￥',
  },
  CNY: {
    currencyUnit: 'CNY',
    currencySign: '元',
  },
  EUR: {
    currencyUnit: 'EUR',
    currencySign: '€',
  },
});

export const BASE_CURRENCY = 'USD';

export const INITIAL_CRYPTO = Object.freeze({
  id: 'bitcoin',
  name: 'Bitcoin',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
});

export const TOTAL_PAGES = 500;
