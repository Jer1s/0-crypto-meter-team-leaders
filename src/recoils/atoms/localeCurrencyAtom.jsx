import { atom } from 'recoil';

const localeCurrencyAtom = atom({
  key: 'localeCurrency',
  default: 'krw',
});

export default localeCurrencyAtom;
