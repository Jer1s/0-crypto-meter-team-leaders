import { selector } from 'recoil';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';
import { BASE_CURRENCY } from 'utils/constants';

const exchangeRateSelector = selector({
  key: 'exchangeRateSelector',
  get: ({ get }) => {
    const exchangeRate = get(exchangeRateAtom);
    return (price, targetCurrency) => {
      if (targetCurrency === BASE_CURRENCY) {
        return price;
      }
      return price * exchangeRate[`${BASE_CURRENCY}TO${targetCurrency}`];
    };
  },
});
export default exchangeRateSelector;
