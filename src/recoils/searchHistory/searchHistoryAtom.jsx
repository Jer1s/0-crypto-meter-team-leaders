import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [{
    id: 1,
    input: {
      date: { year: 2021, month: 12, day: 21 },
      pastPrice: {
        USD: 5, KRW: 7500, JPY: 650, EUR: 10, CNY: 50,
      },
      buyPrice: 0,
      crpytoAmount: 100,
      cryptoId: 'bitcoin',
      cryptoName: 'BitCoin',
      image: null,
    },
    output: {
      price: {
        USD: 10, KRW: 13000, JPY: 1300, EUR: 19, CHY: 100,
      },
      date: { year: 2022, month: 11, day: 20 },
    },
  },
  {
    id: 2,
    input: {
      date: { year: 2019, month: 12, day: 25 },
      pastPrice: {
        USD: 12222225, KRW: 75200, JPY: 6350, EUR: 110, CNY: 510,
      },
      cryptoAmount: 10,
      cryptoId: 'staked-ether',
      cryptoName: 'Lido Staked Ether',
      image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
    },
    output: {
      price: {
        USD: 12310, KRW: 1238922, JPY: 1300, EUR: 19, CHY: 100,
      },
      date: { year: 2023, month: 3, day: 21 },
    },
  }],
});

export default searchHistoryAtom;
