/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import { INITIAL_CRYPTO } from 'utils/constants';
import { useState } from 'react';
import useResponsiveView from 'hooks/useResponsiveView';
import filter from 'assets/filter.svg';
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

  &::-webkit-scrollbar {
  width: 0.6rem;
}

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray10);
    border-radius: 0.6rem;
    height: 21.8rem;
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

const CoinScenarioForm = () => {
  const setScenarioData = useSetRecoilState(scenarioDataAtom);
  const viewportType = useResponsiveView();

  const [selectedDate, setSelectedDate] = useState(null);
  const [buyPrice, setBuyPrice] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(INITIAL_CRYPTO);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [year, month, day] = selectedDate
    ? [selectedDate.getFullYear().toString(),
      (selectedDate.getMonth() + 1).toString(), selectedDate.getDate().toString()]
    : ['0000', '00', '00'];

  const handleSubmit = async (event) => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
    event.preventDefault();
    setScenarioData({
      input: {
        date: { year, month, day },
        price: buyPrice,
        cryptoId: selectedCoin.id,
        image: selectedCoin.image,
      },
      output: {
        outputPrice: 10000,
        isSkyrocketed: true,
        outputDate: { year: 2023, month: 5, day: 19 },
      },
    });
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
