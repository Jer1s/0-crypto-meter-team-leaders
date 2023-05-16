import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  // 더미 데이터
  default: [{
    id: 1,
    date: { year: 2022, month: 10, day: 12 },
    previousPrice: 10000,
    resultDate: { resultYear: 2023, resultMonth: 5, resultDay: 16 },
    resultPrice: 31000,
    isSkyrocketed: true,
    coinType: 'USDT',
  },
  ],
});

export default searchHistoryAtom;
