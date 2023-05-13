import { atom } from 'recoil';

export const searchHistoryAtom = atom({
  key: 'searchHistory',
  default: [],
});
