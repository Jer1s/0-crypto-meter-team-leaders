import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import useCurrencyConverter from 'hooks/useCurrencyConverter ';

const useFormattedPrice = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  const convertCurrency = useCurrencyConverter();
  return (price) => {
    const convertedPrice = convertCurrency(price);
    const formattedPrice = convertedPrice?.toLocaleString();

    if (!ignoreException && localeCurrency === 'KRW') {
      return `${formattedPrice}${currencyUnit}`;
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormattedPrice;
