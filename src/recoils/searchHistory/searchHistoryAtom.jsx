import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [{
    id: 1,
    date: { year: 2022, month: 10, day: 12 },
    price: 10000,
    coinType: 'USDT',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    price: 10000,
    coinType: 'DOGE',
  },
  ],
});

export default searchHistoryAtom;
