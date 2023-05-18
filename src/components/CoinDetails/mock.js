const scenarioData = {
  userInputData: {
    date: { year: 2023, month: 5, day: 10 },
    price: 30000,
    coinType: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  },
  calculatedData: {
    // 사용자 입력 가격 / 현재 코인 가격 = 유저가 구매한 코인 개수
    // 유저가 구매한 코인 개수 * api 요청을 통한 실시간 코인 가격 = calcaulatedPrice
    calculatedPrice: '31,565.74',
    isSkyrocketed: false,
    // 오늘 날짜
    calculateddate: {
      year: 2023, month: 5, day: 13, hour: 10,
    },
  },
};

export default scenarioData;
