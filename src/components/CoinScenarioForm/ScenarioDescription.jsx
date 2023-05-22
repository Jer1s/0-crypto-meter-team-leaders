import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { BASE_CURRENCY, EXCHANGE_RATE } from 'utils/constants';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { useRecoilValue } from 'recoil';

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

const ScenarioDescription = ({
  year, month, day, selectedCoin, price, onBottomSheetClick,
}) => {
  const formatPrice = useFormattedPrice();
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const convertedToKRW = localeCurrency === BASE_CURRENCY ? price : price / EXCHANGE_RATE[`${BASE_CURRENCY}TO${localeCurrency}`];
  const formattedPrice = formatPrice(convertedToKRW);

  return (
    <h1 css={headingStyle}>
      <div css={containerStyle}>
        <button type="button" css={strongText} onClick={onBottomSheetClick}>
          내가 만약
        </button>
        <button type="button" onClick={onBottomSheetClick}>
          <span css={strongText}>
            {`${year}년 ${month}월 ${day}일`}
          </span>
          에
        </button>
        <button type="button" onClick={onBottomSheetClick}>
          <span css={strongText}>{formattedPrice}</span>
          으로
        </button>
        <button type="button" onClick={onBottomSheetClick}>
          <span css={strongText}>{selectedCoin.name}</span>
          을 샀다면,
        </button>
      </div>
    </h1>

  );
};

ScenarioDescription.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,

  selectedCoin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,

  price: PropTypes.number.isRequired,
  onBottomSheetClick: PropTypes.func,
};

export default ScenarioDescription;
