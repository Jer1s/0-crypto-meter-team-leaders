import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [{
    date: { year: 2022, month: 10, day: 12 }, price: 10000, coinType: 'Tether',
  },
  {
    date: { year: 2022, month: 10, day: 12 }, price: 10000, coinType: 'Dogecoin',
  },
  ],
});

export default searchHistoryAtom;
