import { selector } from 'recoil';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';
import { BASE_CURRENCY } from 'utils/constants';

const exchangeRateReverseSelector = selector({
  key: 'exchangeRateReverseSelector',
  get: ({ get }) => {
    const exchangeRate = get(exchangeRateAtom);
    return (price, localeCurrency) => {
      if (localeCurrency === BASE_CURRENCY) {
        return price;
      }
      return price / exchangeRate[`${BASE_CURRENCY}TO${localeCurrency}`];
    };
  },
});
export default exchangeRateReverseSelector;
