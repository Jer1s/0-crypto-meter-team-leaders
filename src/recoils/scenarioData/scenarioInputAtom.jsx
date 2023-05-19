import { atom } from 'recoil';

const scenarioInputAtom = atom({
  key: 'scenarioInput',
  default: {
    date: { year: 0, month: 0, day: 0 }, price: 0, coinType: { id: 'bitcoin', name: 'Bitcoin' },
  },
});

export default scenarioInputAtom;