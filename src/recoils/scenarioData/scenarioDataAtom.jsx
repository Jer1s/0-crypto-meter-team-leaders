import { atom } from 'recoil';
import bitcoinImage from 'assets/bitcoin.webp';
import getCurrentDate from 'utils/getCurrentDate';

const scenarioDataAtom = atom({
  key: 'scenarioData',
  default: {
    input: {
      date: { year: 0, month: 0, day: 0 },
      price: 0,
      cryptoId: 'bitcoin',
      image: bitcoinImage,
    },
    output: {
      // 사용자 입력 가격 / 현재 코인 가격 = 유저가 구매한 코인 개수
      // 유저가 구매한 코인 개수 * api 요청을 통한 실시간 코인 가격 = calcaulatedPrice
      outputPrice: 3156574,
      isSkyrocketed: true,
      outputDate: getCurrentDate(),
    },
  },
});

export default scenarioDataAtom;
