import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [{
    id: 1,
    input: {
      date: { year: 2022, month: 12, day: 11 },
      price: 200,
      cryptoId: 'dogecoin',
      cryptoName: 'Dogecoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    },
    output: {
      outputDate: { year: 2023, month: 1, day: 12 },
      outputPrice: 3000,
      isSkyrocketed: true,
    },
    exchangeRate: {
      USDTOKRW: 1000,
      USDTOEUR: 0.9,
      USDTOJPY: 100,
      USDTOCNY: 7,
    },
  },
  ],
});

export default searchHistoryAtom;
