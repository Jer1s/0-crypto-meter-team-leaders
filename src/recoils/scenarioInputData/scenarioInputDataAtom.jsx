import { atom } from 'recoil';

// 초기값 설정
const INITIAL_CRYPTO = 'bitcoin';

// Atom 정의
export const selectedDateAtom = atom({
  key: 'selectedDate',
  default: null,
});

export const buyPriceAtom = atom({
  key: 'buyPrice',
  default: 0,
});

export const selectedCoinAtom = atom({
  key: 'selectedCoin',
  default: INITIAL_CRYPTO,
});
