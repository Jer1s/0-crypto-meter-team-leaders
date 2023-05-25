import { useRecoilValue } from 'recoil';
import exchangeRateSelector from 'recoils/exchangeRate/exchangeRateSelector';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';

const useFormattedPrice = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  const convertPrice = useRecoilValue(exchangeRateSelector);
  return (price) => {
    const convertedPrice = Number.isNaN(
      convertPrice(price, localeCurrency),
    )
      ? 0 : convertPrice(price, localeCurrency);
    let formattedPrice = convertedPrice?.toLocaleString();
    let checkingdecimal = formattedPrice;
    checkingdecimal = (checkingdecimal * 100) % 100;
    if (checkingdecimal !== 0 && checkingdecimal <= 9) {
      formattedPrice = Number(formattedPrice).toFixed(1);
    } else if (checkingdecimal !== 0 && checkingdecimal <= 99) {
      formattedPrice = Number(formattedPrice).toFixed(2);
    }

    if (!ignoreException && localeCurrency === 'KRW') {
      return `${formattedPrice}${currencyUnit}`;
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormattedPrice;
