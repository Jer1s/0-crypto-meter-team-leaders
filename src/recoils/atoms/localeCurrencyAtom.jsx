import { atom } from 'recoil';

export const localeCurrencyAtom = atom({
  key: 'localeCurrency',
  default: 'krw',
});
