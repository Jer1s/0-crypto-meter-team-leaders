import { atom } from 'recoil';

const exchangeRateAtom = atom({
  key: 'exchangeRate',
  default: {
    USDTOKRW: 1320,
    USDTOEUR: 0.93,
    USDTOJPY: 139,
    USDTOCNY: 7,
  },
});

export default exchangeRateAtom;
