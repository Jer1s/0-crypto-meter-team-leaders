/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import { INITIAL_CRYPTO } from 'utils/constants';
import { useState, useEffect } from 'react';
import useResponsiveView from 'hooks/useResponsiveView';
import filter from 'assets/filter.svg';
import { useQuery } from '@tanstack/react-query';
import getCurrentDate from 'utils/getCurrentDate';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import ScenarioDescription from './ScenarioDescription';
import ScenarioForm from './ScenarioForm';
import BottomSheet from './BottomSheet';

const containerStyle = css`
  position: relative;
  max-width : 100%;
  height: calc(100vh - 13.5rem);
  background-color: var(--gray1);
  border-radius: 2.4rem;
  padding: 6rem 4rem 7rem;
  display:flex;
  flex-direction: column;
  gap: 5.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  
  &::-webkit-scrollbar {
  width: 0.6rem;
}

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray10);
    border-radius: 0.6rem;
  }

  @media (max-width: 1199px) {
    max-width: none;
    height: 100%;
    padding: 3.6rem 6.5rem 3.6rem 3.6rem ;
  }

  @media (max-width: 768px) {
    padding: 2.8rem 6rem 2.4rem 2.8rem ;
  }
`;

const FilterButtonStyle = css`
  display: none;

  @media (max-width: 1199px) {
    position: absolute;
    display: block;
    top: 2.4rem;
    right: 2.4rem;
    margin: 0 1rem;

    button {
      padding: 0;
      border: 0;
      outline: 0;
      border-radius: 3rem;
      background-color: var(--gray3);
      width: 3.2rem;
      height: 3.2rem;
      cursor: pointer;
    }


    img {
      width: 1.6rem;
      height: 1.2rem
    }
  }

  @media (max-width: 768px) {
    top: 1.6rem;
    right: 1.6rem;
    button {
      width: 3rem;
      height: 3rem;
    }

    img {
      width: 1.4rem;
      height: 1.05rem;
    }
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

const CoinScenarioForm = () => {
  const setScenarioData = useSetRecoilState(scenarioDataAtom);
  const setSearchHistory = useSetRecoilState(searchHistoryAtom);
  const viewportType = useResponsiveView();
  const [isHistoryPriceValid,setIsHistoryPriceValid] = useState(true)
  const [selectedDate, setSelectedDate] = useState(null);
  const [buyPrice, setBuyPrice] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(INITIAL_CRYPTO);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [year, month, day] = selectedDate
    ? [selectedDate.getFullYear().toString(),
      (selectedDate.getMonth() + 1).toString(), selectedDate.getDate().toString()]
    : ['0000', '00', '00'];

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
  console.log("당시의 코인 가격을 알 수 없습니다. 날짜를 다시 선택해주세요.")
  setIsHistoryPriceValid(false)
  }

  useEffect(() => {
    if (!historyPrice) return; // historyPrice에 대한 api 요청 응답이 안왔을 때

    const scenarioDataResult = {
      currentPrice: selectedCoin.current_price,
      historyPrice: historyPrice?.market_data?.current_price?.krw,
      selectedPrice: buyPrice
    }

    // api 요청으로 받아온 hitoryPrice가 falsy값 일때
    if (!scenarioDataResult.historyPrice) {
      handleHistoryPriceValidation();
      return 
    }

    const scenarioInputData = calculatePriceDiff(
      scenarioDataResult
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
  const handleBottomSheetClick = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const formProps = {
    selectedCoin,
    setSelectedCoin,
    buyPrice,
    setBuyPrice,
    selectedDate,
    setSelectedDate,
    handleSubmit,
  };

  return (
    <div css={containerStyle}>
      <div css={FilterButtonStyle}>
        <button type="button" onClick={handleBottomSheetClick}>
          <img src={filter} alt="filter icon" />
        </button>
      </div>
      <ScenarioDescription
        year={year}
        month={month}
        day={day}
        selectedCoin={selectedCoin}
        price={buyPrice}
        onBottomSheetClick={viewportType !== 'Desktop' ? handleBottomSheetClick : undefined}
      />
      {viewportType === 'Desktop'
        ? (
          <ScenarioForm
            formProps={formProps}
          />
        ) : (
          <BottomSheet
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            isBottomSheetOpen={isBottomSheetOpen}
          >
            <ScenarioForm
              formProps={formProps}
            />
          </BottomSheet>
        )}
    </div>

  );
};

export default CoinScenarioForm;
