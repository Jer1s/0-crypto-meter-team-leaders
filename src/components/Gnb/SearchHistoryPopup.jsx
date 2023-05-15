/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { COIN_NAME } from 'utils/constants';
import getCurrentDate from 'utils/getCurrentDate';
import usdtSymbol from 'assets/USDT-symbol.png'; // 더미 데이터
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  cursor: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
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
  margin: 2.3rem 0 1.7rem;
  width: 46.4rem;
  height: 2.4rem;

  & > h2 {
    font-size: 2rem;
  }

  & > button {
    cursor: pointer;
    border: 0;
  }

  @media (max-width: 767px) {
  width: 30rem;
  height: 2.2rem;

    & > h2 {
      font-size: 1.8rem;
    }
  }
`;

const historyItemsStyle = css`
  width: 47.2rem;
  @media (max-width: 767px) {
    width: 30rem;
  }
`;

const historyItemStyle = css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.6rem 1.2rem;
  margin: 2rem 0;
  height: 3.9rem;

  @media (max-width: 767px) {
    gap: 0.4rem 1.2rem;
    margin: 1.6rem 0;
    height: 5.8rem;
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
  color: var(--black);
  font-size: 1.5rem;
  line-height: 100%;
  letter-spacing: -0.3px;

  @media (max-width: 767px) {   
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const headerHrStyle = css`
  margin: 0;
  border: 0.1rem solid var(--gray8);
  width: 100%;
`;

const hrStyle = css`
  border: 0.1rem solid var(--gray8);

  &:last-child {
    border: none;
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

const SearchHistoryPopup = () => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  const resetSearchHistory = useResetRecoilState(searchHistoryAtom);
  const formatPrice = useFormattedPrice();
  const currentDate = getCurrentDate();
  // 더미 데이터
  const currentPrice = 31000;
  const formattedCurrentPrice = formatPrice(currentPrice);

  return (
    <div css={[navButtonStyle, popupStyle]}>
      <div css={historyHeaderStyle}>
        <h2>검색 기록</h2>
        <button type="button" onClick={resetSearchHistory}>기록 모두 지우기</button>
      </div>
      <hr css={headerHrStyle} />
      <div css={historyItemsStyle}>
        {searchHistory.map((item) => {
          const {
            year, month, day,
          } = item.date;
          const previousPrice = item.price;
          const formattedPreviousPrice = formatPrice(previousPrice);
          return (
            <>
              <div key={item.id} css={historyItemStyle}>
                <div css={symoblContainer}>
                  <img src={usdtSymbol} css={symbolStyle} alt="USDT Symbol" />
                </div>
                <div css={scenarioDataStyle}>
                  {`만약 ${year}년 ${month}월 ${day}일에 ${formattedPreviousPrice}으로`}
                </div>
                <div css={scenarioResultStyle}>
                  <div>
                    {`${COIN_NAME[item.coinType]}을 샀다면,`}
                  </div>
                  <div>
                    {`${currentDate}에는 `}
                    <span css={
                currentPrice >= previousPrice
                  ? incrementStyle
                  : decrementStyle
                }
                    >
                      {formattedCurrentPrice}
                    </span>
                    {' 입니다.'}
                  </div>
                </div>
              </div>
              <hr css={hrStyle} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchHistoryPopup;
