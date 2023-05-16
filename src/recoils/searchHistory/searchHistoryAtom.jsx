import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  // 더미 데이터
  default: [{
    id: 1,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 10000,
    calculatedPrice: 31000,
    isSkyrocketed: true,
    coinType: 'USDT',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  {
    id: 2,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 20000,
    calculatedPrice: 11000,
    isSkyrocketed: false,
    coinType: 'DOGE',
  },
  ],
});

export default searchHistoryAtom;
