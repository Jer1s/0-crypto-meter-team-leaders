import { atom } from 'recoil';

const exchangeRateAtom = atom({
  key: 'exchangeRate',
  default: {
    USDTOKRW: 1329.35,
    USDTOEUR: 0.93,
    USDTOJPY: 139.55,
    USDTOCNY: 7.07,
  },
});

export default exchangeRateAtom;
