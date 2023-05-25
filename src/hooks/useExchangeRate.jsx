import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import exchangeRate from 'recoils/exchangeRate/exchangeRateAtom';

const RATEEXCHANGE = import.meta.env.VITE_RATEEXCHANGE_API_KEY;

const useExchangeRate = () => {
  const setExchangeRate = useSetRecoilState(exchangeRate);
  const fetchExchangeRate = async () => {
    const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${RATEEXCHANGE}`); // 환율 요청
    return response.json();
  };

  const { data = {} } = useQuery(['exchangeRate'], fetchExchangeRate, {
    refetchIntervalInBackground: 60 * 60 * 1000, // 1시간 주기
  });

  useEffect(() => {
    const { rates = {} } = data;

    const exchangerRateObj = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(rates)) {
      if (key === 'KRW' || key === 'EUR' || key === 'CNY' || key === 'JPY') {
        const localeCurrency = `USDTO${key}`;
        exchangerRateObj[localeCurrency] = value;
      }
    }
    setExchangeRate(exchangerRateObj);
  }, [data, setExchangeRate]);
};

export default useExchangeRate;
