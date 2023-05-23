/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  useRecoilValue, useResetRecoilState, useSetRecoilState,
} from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { CRYPTO_NAME } from 'utils/constants';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import PropTypes from 'prop-types';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  z-index: 1;
  cursor: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;  // safari, operaAndroid, safarionIos 미지원이지만 크게 상관 없는 부분
  position: absolute;
  top: 7.2rem;
  right: 6rem;
  padding: 0;
  width: 52rem;
  max-height: 59rem;
  background-color: var(--white);

  @media (min-width: 1920px) {
    right: calc(6rem + (100vw - 1920px) / 2);
  }

  @media (max-width: 1199px) {
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
  width: 100%;
  height: 8.1rem;
  cursor: pointer;
  border: 0;
  text-align: start;

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
  padding: 1.6rem 2rem;
  height: 9.2rem;

  & > *:nth-of-type(3) {
    width: auto;
  }
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

const zeroStyle = css`
  color: var(--gray5);
`;

const incrementStyle = css`
  color: var(--primary);
`;

const decrementStyle = css`
  color: var(--primary-red);
`;

const SearchHistoryPopup = ({ setShowPopup }) => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  const resetSearchHistoryAtom = useResetRecoilState(searchHistoryAtom);
  const setScenarioData = useSetRecoilState(scenarioDataAtom);
  const formatPrice = useFormattedPrice();

  const resetSearchHistory = () => {
    resetSearchHistoryAtom();
    localStorage.removeItem('searchHistory');
  };

  const recalculateHistory = (item) => {
    setScenarioData(item);
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
          } = item.input.date;
          const {
            year: outputYear, month: outputMonth, day: outputDay,
          } = item.output.outputDate;
          const { price, image, cryptoId } = item.input;
          const { outputPrice, isSkyrocketed } = item.output;
          const formattedPreviousPrice = formatPrice(price);
          const formattedResultPrice = formatPrice(outputPrice);
          let priceStyle = zeroStyle;
          if (outputPrice !== 0) {
            priceStyle = (isSkyrocketed === true) ? incrementStyle : decrementStyle;
          }
          return (
            <button type="button" onClick={() => { return recalculateHistory(item); }} key={item.cryptoId} css={historyItemStyle}>
              <div css={symoblContainer}>
                <img src={image} css={symbolStyle} alt="USDT Symbol" />
              </div>
              <div css={scenarioDataStyle}>
                {`만약 ${year}년 ${month}월 ${day}일에 ${formattedPreviousPrice}으로`}
              </div>
              <div css={scenarioResultStyle}>
                <div>
                  {`${CRYPTO_NAME[cryptoId]}을 샀다면,`}
                </div>
                <div>
                  {`${outputYear}년 ${outputMonth}월 ${outputDay}일에는 `}
                  <span css={priceStyle}>
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
