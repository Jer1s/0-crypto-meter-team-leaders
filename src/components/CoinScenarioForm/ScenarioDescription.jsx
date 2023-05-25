import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { BASE_CURRENCY } from 'utils/constants';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom, buyPriceAtom, selectedCoinAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import exchangeRateAtom from 'recoils/exchangeRate/exchangeRateAtom';

const containerStyle = css`
  color: var(--gray5);
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  button {
    all: unset;
  }


  @media (max-width: 1199px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.1rem;

  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const headingStyle = css`
  font-size: 3.6rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const strongText = css`
  color: var(--white);
`;

const lineStyle = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const ScenarioDescription = ({
  onBottomSheetClick,
}) => {
  const price = useRecoilValue(buyPriceAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const selectedCoin = useRecoilValue(selectedCoinAtom);
  const formatPrice = useFormattedPrice();
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const exchangeRate = useRecoilValue(exchangeRateAtom);

  const convertedPrice = (localeCurrency === BASE_CURRENCY) ? price : (price / exchangeRate[`${BASE_CURRENCY}TO${localeCurrency}`]);
  const formattedPrice = formatPrice(convertedPrice);

  const [year, month, day] = selectedDate
    ? [selectedDate.getFullYear().toString(),
      (selectedDate.getMonth() + 1).toString(), selectedDate.getDate().toString()]
    : ['0000', '00', '00'];

  return (
    <h1 css={headingStyle}>
      <div css={containerStyle}>
        <div css={lineStyle}>
          <button type="button" css={strongText} onClick={onBottomSheetClick}>
            내가 만약
          </button>
          <button type="button" onClick={onBottomSheetClick}>
            <span css={strongText}>
              {`${year}년 ${month}월 ${day}일`}
            </span>
            에
          </button>
        </div>
        <div css={lineStyle}>
          <button type="button" onClick={onBottomSheetClick}>
            <span css={strongText}>{formattedPrice}</span>
            으로
          </button>
          <button type="button" onClick={onBottomSheetClick}>
            <span css={strongText}>{selectedCoin.name}</span>
            을 샀다면,
          </button>
        </div>
      </div>
    </h1>

  );
};

ScenarioDescription.propTypes = {
  onBottomSheetClick: PropTypes.func,
};

export default ScenarioDescription;
