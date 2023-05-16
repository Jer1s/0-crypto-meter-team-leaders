import { atom } from 'recoil';

const scenarioDataAtom = atom({
  key: 'scenarioData',
  default: {
    date: { year: 0, month: 0, day: 0 }, price: 0, coinType: 'BTC',
  },
});

export default scenarioDataAtom;
