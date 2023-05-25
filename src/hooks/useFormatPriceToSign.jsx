import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';

// 환율 계산 없이 UI만 반환하는 hook
const useFormatPriceToSign = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  return (price) => {
    let formattedPrice = price.toFixed(2);
    const checkingdecimal = (formattedPrice * 100) % 100;
    if (checkingdecimal === 0) {
      formattedPrice = Number(formattedPrice).toFixed(0);
    } else if (checkingdecimal % 10 === 0) {
      formattedPrice = Number(formattedPrice).toFixed(1);
    } else {
      formattedPrice = Number(formattedPrice).toFixed(2);
    }

    formattedPrice = new Intl.NumberFormat().format(formattedPrice);

    if (!ignoreException) {
      switch (localeCurrency) {
        case 'KRW':
          return `${formattedPrice}${currencyUnit}`;
        case 'CNY':
          return `${formattedPrice}${currencySign}`;
        default:
          break;
      }
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormatPriceToSign;
