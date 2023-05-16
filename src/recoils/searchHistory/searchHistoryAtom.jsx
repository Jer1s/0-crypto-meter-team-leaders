import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  // 더미 데이터
  default: [{
    id: 1,
    inputDate: { inputYear: 2022, inputMonth: 10, inputDay: 12 },
    inputPrice: 10000,
    outputDate: { outputYear: 2023, outputMonth: 5, outputDay: 16 },
    outputPrice: 31000,
    coinType: 'USDT',
    isSkyrocketed: true,
  },
  ],
});

export default searchHistoryAtom;
