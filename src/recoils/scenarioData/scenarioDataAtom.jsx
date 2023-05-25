import { atom } from 'recoil';
import bitcoinImage from 'assets/bitcoin.webp';

const scenarioDataAtom = atom({
  key: 'scenarioData',
  default: {
    input: {
      date: { year: 0, month: 0, day: 0 },
      pastPrice: {
        USD: 0, KRW: 0, JPY: 0, EUR: 0, CNY: 0,
      },
      cryptoAmount: 0,
      cryptoId: 'bitcoin',
      cryptoName: 'BitCoin',
      image: bitcoinImage,
    },
    output: {
      price: {
        USD: 0, KRW: 0, JPY: 0, EUR: 0, CNY: 0,
      },
      date: { year: 0, month: 0, day: 0 },
    },
  },
});

export default scenarioDataAtom;
