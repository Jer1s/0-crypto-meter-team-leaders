import { atom } from 'recoil';

const scenarioDataAtom = atom({
  key: 'scenarioData',
  default: {
    date: { year: 0, month: 0, day: 0 }, currency: 'USD', price: 0, coinType: 'Bitcoin',
  },
});

export default scenarioDataAtom;
