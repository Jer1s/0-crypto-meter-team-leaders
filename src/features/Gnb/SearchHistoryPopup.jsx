/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import PropTypes from 'prop-types';
import defaultCryptoImage from 'assets/crypto-image-default.svg';
import formatPrice from 'utils/formatPrice';
import getCurrentDate from 'utils/getCurrentDate';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';
import { BASE_CURRENCY } from 'utils/constants';
import { useQuery } from '@tanstack/react-query';
import { getCoinCurrentData } from 'api/getCoins';
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
  height: 8.3rem;
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
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const searchHistory = useRecoilValue(searchHistoryAtom);
  const setScenarioData = useSetRecoilState(scenarioDataAtom);
  const resetSearchHistoryAtom = useResetRecoilState(searchHistoryAtom);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCrpytoId, setSelectedCryptoId] = useState('bitcoin');
  const exchangeRate = useRecoilValue(exchangeRateAtom);
  const { data, refetch } = useQuery(['coin', selectedCrpytoId], () => { return getCoinCurrentData(selectedCrpytoId); });

  const resetSearchHistory = () => {
    resetSearchHistoryAtom();
    localStorage.removeItem('searchHistory');
  };

  const handleClick = async (item) => {
    setSelectedItem(item);
    setSelectedCryptoId(item.input.cryptoId);
  };

  useEffect(() => {
    if (data) {
      refetch();
      setShowPopup(false);
    }
  }, [selectedCrpytoId]);

  useEffect(() => {
    if (data && selectedItem) {
      const price = data?.market_data?.current_price?.usd;
      const newScenarioData = {
        input: selectedItem.input,
        output: {
          date: getCurrentDate(),
          price: {
            USD: price * selectedItem.input.cryptoAmount,
            KRW: price * selectedItem.input.cryptoAmount * exchangeRate[`${BASE_CURRENCY}TOKRW`],
            JPY: price * selectedItem.input.cryptoAmount * exchangeRate[`${BASE_CURRENCY}TOJPY`],
            EUR: price * selectedItem.input.cryptoAmount * exchangeRate[`${BASE_CURRENCY}TOEUR`],
            CNY: price * selectedItem.input.cryptoAmount * exchangeRate[`${BASE_CURRENCY}TOCNY`],
          },
        },
      };
      setScenarioData(newScenarioData);
    }
  }, [data, selectedItem]);

  return (
    <div css={[navButtonStyle, popupStyle]}>
      <div css={historyHeaderStyle}>
        <h2>검색 기록</h2>
        <button type="button" onClick={resetSearchHistory}>기록 모두 지우기</button>
      </div>
      <div css={historyItemsStyle}>
        {searchHistory.slice(0).reverse().map((item) => {
          const {
            date: inputDate, pastPrice, cryptoName, image,
          } = item.input;
          const {
            year: inputYear, month: inputMonth, day: inputDay,
          } = inputDate;
          const { price: outputPrice, date: outputDate } = item.output;
          const {
            year: outputYear, month: outputMonth, day: outputDay,
          } = outputDate;
          const formattedInputPrice = formatPrice(pastPrice[localeCurrency], localeCurrency);
          const formattedOutputPrice = formatPrice(outputPrice[localeCurrency], localeCurrency);

          let priceStyle = (outputPrice[localeCurrency] > pastPrice[localeCurrency])
            ? incrementStyle
            : decrementStyle;
          if (outputPrice[localeCurrency] === pastPrice[localeCurrency]) {
            priceStyle = zeroStyle;
          }
          return (
            <button
              type="button"
              onClick={() => {
                return handleClick(item);
              }}
              key={item.id}
              css={historyItemStyle}
            >
              <div css={symoblContainer}>
                <img src={image || defaultCryptoImage} css={symbolStyle} alt="SYMBOL" />
              </div>
              <div css={scenarioDataStyle}>
                {`만약 ${inputYear}년 ${inputMonth}월 ${inputDay}일에 ${formattedInputPrice}으로`}
              </div>
              <div css={scenarioResultStyle}>
                <div>
                  {`${cryptoName}을 샀다면,`}
                </div>
                <div>
                  {`${outputYear}년 ${outputMonth}월 ${outputDay}일에는 `}
                  <span css={priceStyle}>
                    {formattedOutputPrice}
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
