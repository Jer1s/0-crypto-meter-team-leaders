import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';

// 환율 계산 없이 UI만 반환하는 hook
const useFormatPriceToSign = (ignoreException) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  return (price) => {
    const formattedPrice = price?.toLocaleString();

    if (!ignoreException && localeCurrency === 'KRW') {
      return `${formattedPrice}${currencyUnit}`;
    }
    if (!ignoreException && localeCurrency === 'CNY') {
      return `${formattedPrice}${currencySign}`;
    }

    return `${currencySign}${formattedPrice}`;
  };
};

export default useFormatPriceToSign;
