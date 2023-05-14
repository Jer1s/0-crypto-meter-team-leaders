import { atom } from 'recoil';

const localeCurrencyAtom = atom({
  key: 'localeCurrency',
  default: 'KRW',
});

export default localeCurrencyAtom;
