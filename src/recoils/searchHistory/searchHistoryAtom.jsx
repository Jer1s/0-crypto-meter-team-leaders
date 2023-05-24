import { atom } from 'recoil';

const searchHistoryAtom = atom({
  key: 'searchHistory',
  // 더미 데이터
  default: [
    {
      input: {
        date: { year: 2022, month: 10, day: 12 },
        price: 100000,
        cryptoId: 'usd-coin',
        cryptoName: 'USD Coin',
        image: 'https://assets.coingecko.com/coins/images/10481/large/Tether_Gold.png?1668148656',
      },
      output: {
        outputPrice: 5000000,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 19 },
      },
    },
    {
      input: {
        date: { year: 2023, month: 4, day: 1 },
        price: 100000,
        cryptoId: 'dogecoin',
        cryptoName: 'Dogecoin',
        image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
      },
      output: {
        outputPrice: 50000,
        isSkyrocketed: false,
        outputDate: { year: 2023, month: 4, day: 15 },
      },
    },
    {
      input: {
        date: { year: 2021, month: 3, day: 22 },
        price: 5000,
        cryptoId: 'bitcoin',
        cryptoName: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      },
      output: {
        outputPrice: 32150000,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 25 },
      },
    },
    {
      input: {
        date: { year: 2019, month: 12, day: 25 },
        price: 15300,
        cryptoId: 'staked-ether',
        cryptoName: 'Lido Staked Ether',
        image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
      },
      output: {
        outputPrice: 1285900,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 3, day: 21 },
      },
    },
    {
      input: {
        date: { year: 2019, month: 12, day: 25 },
        price: 2000,
        cryptoId: 'ethereum-classic',
        cryptoName: '이더리움클래식',
        image: 'https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169',
      },
      output: {
        outputPrice: 35000,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 18 },
      },
    },
    {
      input: {
        date: { year: 2019, month: 12, day: 25 },
        price: 2000,
        cryptoId: 'internet-computer',
        cryptoName: 'Internet Computer',
        image: 'https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073',
      },
      output: {
        outputPrice: 6946.73,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 15 },
      },
    },
    {
      input: {
        date: { year: 2022, month: 12, day: 10 },
        price: 200000,
        cryptoId: 'true-usd',
        cryptoName: '트루USD',
        image: 'https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665',
      },
      output: {
        outputPrice: 1336222.87,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 13 },
      },
    },
    {
      input: {
        date: { year: 2019, month: 12, day: 25 },
        price: 202200,
        cryptoId: 'crypto-com-chain',
        image: 'https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1669699773',
      },
      output: {
        outputPrice: 100230,
        isSkyrocketed: false,
        outputDate: { year: 2023, month: 4, day: 15 },
      },
    },
    {
      input: {
        date: { year: 2018, month: 12, day: 10 },
        price: 2000,
        cryptoId: 'ethereum',
        cryptoName: '이더리움',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      },
      output: {
        outputPrice: 1213336222.87,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 20 },
      },
    }],
});

export default searchHistoryAtom;
