import { atom } from 'recoil';

const exchangeRateAtom = atom({
  key: 'exchangeRate',
  default: {
<<<<<<< HEAD
    USDTOKRW: 1320,
    USDTOEUR: 0.93,
    USDTOJPY: 139,
    USDTOCNY: 7,
=======
    USDTOKRW: 1000,
    USDTOEUR: 1000,
    USDTOJPY: 1000,
    USDTOCNY: 1000,
>>>>>>> f9008db (feat: 더에휴스)
  },
});

export default exchangeRateAtom;
