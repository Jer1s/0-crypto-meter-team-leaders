import { BASE_CURRENCY } from 'utils/constants';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';

const useCurrencyConverter = () => {
  const exchangeRate = useRecoilValue(exchangeRateAtom);
  const localeCurrency = useRecoilValue(localeCurrencyAtom);

  return (price) => {
    const convertedPrice = localeCurrency !== BASE_CURRENCY
      ? price * exchangeRate[`${BASE_CURRENCY}TO${localeCurrency}`] : price;

    return convertedPrice;
  };
};

export default useCurrencyConverter;
