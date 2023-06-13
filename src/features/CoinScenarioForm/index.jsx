/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import useResponsiveView from 'hooks/useResponsiveView';
import filter from 'assets/filter.svg';
import ScenarioDescription from './ScenarioDescription';
import ScenarioForm from './ScenarioForm';
import BottomSheet from './BottomSheet';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  position: relative;
  background-color: var(--gray1);
  border-radius: 2.4rem;
  padding: 6rem 4rem 7rem;
  height: 100%;
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
    padding: 3.6rem;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 2.8rem 2.4rem ;
  }
`;

const FilterButtonStyle = css`
  display: none;

  @media (max-width: 1199px) {
    position: absolute;
    display: block;
    top: 2.4rem;
    right: 3.4rem;

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
  const viewportType = useResponsiveView();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetClick = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <div css={containerStyle}>
      <div css={FilterButtonStyle}>
        <button type="button" onClick={handleBottomSheetClick}>
          <img src={filter} alt="filter icon" />
        </button>
      </div>
      <ScenarioDescription
        onBottomSheetClick={viewportType !== 'Desktop' ? handleBottomSheetClick : undefined}
      />
      {viewportType === 'Desktop'
        ? (
          <ScenarioForm
            isBottomSheetOpen={isBottomSheetOpen}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
          />
        ) : (
          <BottomSheet
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            isBottomSheetOpen={isBottomSheetOpen}
          >
            <ScenarioForm
              isBottomSheetOpen={isBottomSheetOpen}
              setIsBottomSheetOpen={setIsBottomSheetOpen}
            />
          </BottomSheet>
        )}
    </div>

  );
};

export default CoinScenarioForm;
