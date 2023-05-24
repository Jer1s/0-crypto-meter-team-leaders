import { atom } from 'recoil';
import bitcoinImage from 'assets/bitcoin.webp';

const scenarioDataAtom = atom({
  key: 'scenarioData',
  default: {
    input: {
      date: { year: 0, month: 0, day: 0 },
      price: 0,
      cryptoId: 'bitcoin',
      cryptoName: 'BitCoin',
      image: bitcoinImage,
    },
    output: {
      outputPrice: 0,
      isSkyrocketed: true,
      outputDate: { year: 0, month: 0, day: 0 },
    },
  },
});

export default scenarioDataAtom;
