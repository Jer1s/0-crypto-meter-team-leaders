import { selector } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { LOCALE_CURRENCY } from 'utils/constants';

const localeCurrencySelector = selector({
  key: 'localeCurrencySelector',
  get: ({ get }) => {
    const selectedCurrency = get(localeCurrencyAtom);
    const currencyData = LOCALE_CURRENCY[selectedCurrency];
    return currencyData;
  },
});

export default localeCurrencySelector;
