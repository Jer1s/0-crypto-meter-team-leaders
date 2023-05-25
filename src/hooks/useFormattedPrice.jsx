import { useRecoilValue } from 'recoil';
import exchangeRateSelector from 'recoils/exchangeRate/exchangeRateSelector';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';

const useFormattedPrice = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  const convertPrice = useRecoilValue(exchangeRateSelector);
  return (price) => {
    const convertedPrice = convertPrice(price, localeCurrency);
    const formattedPrice = convertedPrice?.toLocaleString();

    if (!ignoreException && localeCurrency === 'KRW') {
      return `${formattedPrice}${currencyUnit}`;
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormattedPrice;
