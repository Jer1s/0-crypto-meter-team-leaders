import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import exchangeRateSelector from 'recoils/exchangeRate/exchangeRateSelector';

const useFormattedPrice = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  const convertPrice = useRecoilValue(exchangeRateSelector);

  return (price) => {
    const convertedPrice = Number.isNaN(
      convertPrice(price, localeCurrency),
    )
      ? 0 : convertPrice(price, localeCurrency);
    let formattedPrice = convertedPrice?.toFixed(2);
    const checkingdecimal = (formattedPrice * 100) % 100;
    if (checkingdecimal === 0) {
      formattedPrice = Number(formattedPrice).toFixed(0);
    } else if (checkingdecimal % 10 === 0) {
      formattedPrice = Number(formattedPrice).toFixed(1);
    } else {
      formattedPrice = Number(formattedPrice).toFixed(2);
    }

    formattedPrice = new Intl.NumberFormat().format(formattedPrice);

    if (!ignoreException && localeCurrency === 'KRW') {
      return `${formattedPrice}${currencyUnit}`;
    } if (!ignoreException && localeCurrency === 'CNY') {
      return `${formattedPrice}${currencySign}`;
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormattedPrice;
