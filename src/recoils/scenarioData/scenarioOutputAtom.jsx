import { atom } from 'recoil';

const scenarioOutputAtom = atom({
  key: 'scenarioOutput',
  default: {
    inputDate: { year: 0, month: 0, day: 0 },
    inputPrice: 0,
    outputDate: {
      outputYear: 0, outputMonth: 0, outputDay: 0, outputHour: 0,
    },
    outputPrice: 0,
    coinType: 'BTC',
    isSkyrocketed: true,
  },
});

export default scenarioOutputAtom;
