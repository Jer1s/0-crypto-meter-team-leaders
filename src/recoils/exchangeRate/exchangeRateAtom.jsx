import { atom } from 'recoil';

const exchangeRateAtom = atom({
  key: 'exchangeRate',
  default: {
    USDTOKRW: 1000,
    USDTOEUR: 1000,
    USDTOJPY: 1000,
    USDTOCNY: 1000,
  },
});

export default exchangeRateAtom;
