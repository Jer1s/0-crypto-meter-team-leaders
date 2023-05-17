/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  useRecoilValue, useResetRecoilState, useSetRecoilState,
} from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { COIN_NAME } from 'utils/constants';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';
import PropTypes from 'prop-types';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  z-index: 1;
  cursor: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 7.2rem;
  right: 6rem;
  padding: 0;
  width: 52rem;
  max-height: 59rem;
  background-color: var(--white);

  @media (min-width: 768px) and (max-width: 1199px) {
    right: 2.4rem;
  }
  
  @media (max-width: 767px) {
    top: 6rem;
    right: 2rem;
    padding: 0;
    width: 34.3rem;
    max-height: 57rem;
  }
`;

const historyHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 2rem 2.4rem 1.7rem;
  width: 100%;
  height: 6.4rem;

  & > h2 {
    font-size: 2rem;
  }

  & > button {
    cursor: pointer;
    border: 0;
  }

  @media (max-width: 767px) {
  padding-top: 2rem;
  height: 5.8rem;

    & > h2 {
      font-size: 1.8rem;
    }
  }
`;

const historyItemsStyle = css`
  width: 52rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const historyItemStyle = css`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.6rem 1.2rem;
  padding: 2rem 2.4rem;
  width: 47.2rem;
  height: 8.1rem;

  cursor: pointer;
  border: 0;
  text-align: start;
  width: 100%;

  @media (hover: hover) {
    &:hover {
      background-color: var(--gray9);
    }
  }

  border-bottom: 0.1rem solid var(--gray8);

  &:last-child {
    border: none;
  }

@media (max-width: 767px) {
  gap: 0.4rem 1.2rem;
  padding: 0 2rem;
  height: 5.8rem;
  padding: 1.6rem 2rem;
  height: 9.1rem;
}
`;

const scenarioDataStyle = css`
  color: var(--gray5);
  line-height: 1.8rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const scenarioResultStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.4rem;
  font-size: 1.5rem;
  line-height: 100%;
  letter-spacing: -0.3px;

  @media (max-width: 767px) { 
    width: 25.9rem;  
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const symoblContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.8rem;
  height: 100%;
`;

const symbolStyle = css`
  width: 2.8rem;
`;

const incrementStyle = css`
  color: var(--primary);
`;

const decrementStyle = css`
  color: var(--primary-red);
`;

const SearchHistoryPopup = ({ setShowPopup }) => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  const resetSearchHistory = useResetRecoilState(searchHistoryAtom);
  const formatPrice = useFormattedPrice();
  const setScenarioData = useSetRecoilState(scenarioInputAtom);

  const recalculateHistory = (item) => {
    setScenarioData({ date: item.inputDate, price: item.inputPrice, coinType: item.coinType });
    setShowPopup(false);
  };

  return (
    <div css={[navButtonStyle, popupStyle]}>
      <div css={historyHeaderStyle}>
        <h2>검색 기록</h2>
        <button type="button" onClick={resetSearchHistory}>기록 모두 지우기</button>
      </div>
      <div css={historyItemsStyle}>
        {searchHistory.map((item) => {
          const {
            year, month, day,
          } = item.inputDate;
          const {
            outputYear, outputMonth, outputDay,
          } = item.outputDate;
          const { inputPrice, outputPrice, isSkyrocketed } = item;
          const formattedPreviousPrice = formatPrice(inputPrice);
          const formattedResultPrice = formatPrice(outputPrice);
          return (
            <button type="button" onClick={() => { return recalculateHistory(item); }} key={item.id} css={historyItemStyle}>
              <div css={symoblContainer}>
                <img src={item.image} css={symbolStyle} alt="USDT Symbol" />
              </div>
              <div css={scenarioDataStyle}>
                {`만약 ${year}년 ${month}월 ${day}일에 ${formattedPreviousPrice}으로`}
              </div>
              <div css={scenarioResultStyle}>
                <div>
                  {`${COIN_NAME[item.coinType]}을 샀다면,`}
                </div>
                <div>
                  {`${outputYear}년 ${outputMonth}월 ${outputDay}일에는 `}
                  <span css={
                      (isSkyrocketed)
                        ? incrementStyle
                        : decrementStyle
                      }
                  >
                    {formattedResultPrice}
                  </span>
                  {' 입니다.'}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

SearchHistoryPopup.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
};

export default SearchHistoryPopup;
