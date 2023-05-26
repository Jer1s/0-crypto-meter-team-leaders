/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilState } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { selectedDateAtom, buyPriceAtom, selectedCoinAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import getCurrentDate from 'utils/getCurrentDate';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import exchangeRateReverseSelector from 'recoils/exchangeRate/exchangeRateReverseSelector';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';
import { calculatePriceDiff } from 'utils/calculatePriceDiff';
import AddPriceButton from './AddPriceButton';
import CoinTypeDropDown from './CoinTypeDropDown';
import BuyPriceInput from './BuyPriceInput';
import DateInput from './DateInput';

const formStyle = css`
  position: static;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5.5rem;
`;

const submitButtonStyle = css`
  flex-basis: 6.4rem;
  flex-shrink: 0;
  background-color: var(--white);
  border: none;
  border-radius: 3.5rem;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 100%;
    background-color: var(--gray1);
    color: var(--white);
  }

  @media (max-width: 1199px) {
    height: 5.9rem;
  }
`;

const inputContainerStyle = css`
  display : flex;
  flex-direction: column;
  gap : 2.5rem;
`;

const buyPriceInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 1199px){
    gap: 0.8rem;
  }
`;

const addPriceButtonContainerStyle = css`
  display: flex;
  gap: 0.8rem;
  justify-content: end;

  @media (max-width: 1199px){
    justify-content: start;
  }
`;

const fetchHistoryData = async (date, cointype) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/coins/${cointype}/history?date=${date}&localization=ko`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

const ScenarioForm = ({ isBottomSheetOpen, setIsBottomSheetOpen }) => {
  const convertPriceToBase = useRecoilValue(exchangeRateReverseSelector);
  const exchangeRate = useRecoilValue(exchangeRateAtom);

  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const buyPrice = useRecoilValue(buyPriceAtom);
  const selectedCoin = useRecoilValue(selectedCoinAtom);
  const [isHistoryPriceValid, setIsHistoryPriceValid] = useState(true);
  const [scenarioData, setScenarioData] = useRecoilState(scenarioDataAtom);
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryAtom);
  const [isSubmited, setIsSubmited] = useState(false);

  const [year, month, day] = selectedDate ? [selectedDate.getFullYear().toString(),
    (selectedDate.getMonth() + 1).toString(), selectedDate.getDate().toString()] : ['0000', '00', '0'];

  const addButtonData = localeCurrency === 'KRW'
    ? [5000, 10000, 50000, 100000]
    : [10, 50, 100, 500, 1000];

  const { data, refetch, loading } = useQuery(
    ['coinsHistory'],
    () => { return fetchHistoryData(`${day}-${month}-${year}`, selectedCoin.id); },
    { enabled: false }, // 초기 로드 비활성화
  );

  const historyPrice = useMemo(() => {
    return {
      USD: data?.market_data?.current_price?.usd,
      KRW: data?.market_data?.current_price?.krw,
      JPY: data?.market_data?.current_price?.jpy,
      CNY: data?.market_data?.current_price?.cny,
      EUR: data?.market_data?.current_price?.eur,
    };
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHistoryPriceValid(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isHistoryPriceValid]);

  const handleHistoryPriceValidation = () => {
    setIsHistoryPriceValid(false);
  };

  const [scenarioOutputData, setScenarioOutputData] = useState({});

  useEffect(() => {
    if (!data && !loading) {
      if (!(historyPrice.USD || historyPrice.KRW
        || historyPrice.JPY || historyPrice.CNY || historyPrice.EUR)) return;
    } // historyPrice에 대한 api 요청 응답이 안왔을 때
    const scenarioDataResult = {
      currentPrice: selectedCoin.current_price,
      historyPrice,
      buyPrice,
    };

    setScenarioOutputData(
      // output.price 계산 하는 로직
      calculatePriceDiff(scenarioDataResult, exchangeRate, localeCurrency),
    );
  }, [isSubmited]);

  // scenarioData set

  useEffect(() => {
    if (Object.keys(scenarioOutputData).length === 0) { return; }

    const newScenarioData = {
      input: {
        date: { year, month, day },
        pastPrice: scenarioOutputData.pastPrice,
        cryptoAmount: buyPrice / historyPrice.USD,
        cryptoId: selectedCoin.id,
        cryptoName: selectedCoin.name,
        image: selectedCoin.image,
      },
      output: {
        price: scenarioOutputData.price,
        date: getCurrentDate(),
      },
    };

    setScenarioData(newScenarioData);
  }, [scenarioOutputData]);

  useEffect(() => {
    if (Object.keys(scenarioOutputData).length === 0) { return; }
    const senarioDataWithID = {
      id: searchHistory.length + 1,
      ...scenarioData,
    };
    setSearchHistory((prevHistory) => { return [...prevHistory, senarioDataWithID]; });
  }, [scenarioData]);

  useEffect(() => {
    if (!data) return; // historyPrice에 대한 api 요청 응답이 안왔을 때

    // api 요청으로 받아온 hitoryPrice가 falsy값 일때
    if (!(historyPrice.USD || historyPrice.KRW
      || historyPrice.JPY || historyPrice.CNY || historyPrice.EUR)) {
      handleHistoryPriceValidation();
    }
  }, [isSubmited, historyPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedDate) {
      handleHistoryPriceValidation();
      return;
    }

    await refetch();
    setIsSubmited(!isSubmited);
  };

  useEffect(() => {
  }, [historyPrice]);

  useEffect(() => {
    if (!(historyPrice.USD || historyPrice.KRW
      || historyPrice.JPY || historyPrice.CNY || historyPrice.EUR)) return;
    setIsBottomSheetOpen(!isBottomSheetOpen);
  }, [historyPrice]);

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <div css={inputContainerStyle}>

        <DateInput isHistoryPriceValid={isHistoryPriceValid} />
        <div css={buyPriceInputStyle}>
          <BuyPriceInput />
          <div css={addPriceButtonContainerStyle}>
            {addButtonData.map((value) => {
              const convertedValue = convertPriceToBase(value, localeCurrency);
              return (
                <AddPriceButton
                  key={value}
                  value={value}
                  convertedValue={convertedValue}
                />
              );
            })}
          </div>
        </div>
        <CoinTypeDropDown />
      </div>
      <button type="submit" css={submitButtonStyle} onClick={handleSubmit}>오늘 얼마가 되었을까?</button>
    </form>

  );
};

export default ScenarioForm;

ScenarioForm.propTypes = {
  isBottomSheetOpen: PropTypes.bool.isRequired,
  setIsBottomSheetOpen: PropTypes.func.isRequired,

};
