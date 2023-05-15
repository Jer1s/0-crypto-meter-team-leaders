import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [{
    date: { year: 2022, month: 10, day: 12 }, currency: 'USD', price: 10, coinType: 'Tether',
  }],
});

export default searchHistoryAtom;
