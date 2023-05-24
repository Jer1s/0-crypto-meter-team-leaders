/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { selectedDateAtom, buyPriceAtom, selectedCoinAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import getCurrentDate from 'utils/getCurrentDate';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import AddPriceButton from './AddPriceButton';
import CoinTypeDropDown from './CoinTypeDropDown';
import BuyPriceInput from './BuyPriceInput';
import DateInput from './DateInput';

const formStyle = css`
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
    `https://api.coingecko.com/api/v3/coins/${cointype}/history?date=${date}&localization=ko`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

const calculatePriceDiff = ({ currentPrice, historyPrice, selectedPrice }) => {
  const currentTotalCost = (selectedPrice / historyPrice) * currentPrice;
  const isSkyrocketed = (selectedPrice - currentTotalCost) <= 0;

  return { currentTotalCost, isSkyrocketed };
};
const ScenarioForm = ({ isBottomSheetOpen, setIsBottomSheetOpen }) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const buyPrice = useRecoilValue(buyPriceAtom);
  const selectedCoin = useRecoilValue(selectedCoinAtom);
  const [isHistoryPriceValid, setIsHistoryPriceValid] = useState(true);
  const setScenarioData = useSetRecoilState(scenarioDataAtom);
  const setSearchHistory = useSetRecoilState(searchHistoryAtom);

  const [year, month, day] = selectedDate ? [selectedDate.getFullYear().toString(),
    (selectedDate.getMonth() + 1).toString(), selectedDate.getDate().toString()] : ['0000', '00', '0'];

  const addButtonData = localeCurrency === 'KRW'
    ? [5, 10, 50, 100]
    : [10, 50, 100, 500, 1000];

  const { data: historyPrice, refetch } = useQuery(
    ['coinsHistory', selectedDate, selectedCoin],
    () => { return fetchHistoryData(`${day}-${month}-${year}`, selectedCoin.id); },
    { enabled: false }, // 초기 로드 비활성화
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHistoryPriceValid(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isHistoryPriceValid]);

  const handleHistoryPriceValidation = () => {
    console.log('당시의 코인 가격을 알 수 없습니다. 날짜를 다시 선택해주세요.');
    setIsHistoryPriceValid(false);
  };

  useEffect(() => {
    if (!historyPrice) return; // historyPrice에 대한 api 요청 응답이 안왔을 때

    const scenarioDataResult = {
      currentPrice: selectedCoin.current_price,
      historyPrice: historyPrice?.market_data?.current_price?.krw,
      selectedPrice: buyPrice,
    };

    // api 요청으로 받아온 hitoryPrice가 falsy값 일때
    if (!scenarioDataResult.historyPrice) {
      handleHistoryPriceValidation();
      return;
    }

    const scenarioInputData = calculatePriceDiff(
      scenarioDataResult,
    );
    const { currentTotalCost, isSkyrocketed } = scenarioInputData;

    const newScenarioData = {
      input: {
        date: { year, month, day },
        price: buyPrice,
        cryptoId: selectedCoin.id,
        image: selectedCoin.image,
      },
      output: {
        outputPrice: currentTotalCost,
        isSkyrocketed,
        outputDate: getCurrentDate(),
      },
    };

    setScenarioData(newScenarioData);
    setSearchHistory((prevHistory) => { return [...prevHistory, newScenarioData]; });
  }, [historyPrice]);

  const handleSubmit = async (event) => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
    event.preventDefault();
    refetch();
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <div css={inputContainerStyle}>
        <DateInput />
        <div css={buyPriceInputStyle}>
          <BuyPriceInput />
          <div css={addPriceButtonContainerStyle}>
            {addButtonData.map((value) => {
              return <AddPriceButton key={value} value={value} />;
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
