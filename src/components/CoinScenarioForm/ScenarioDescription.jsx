import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { BASE_CURRENCY, EXCHANGE_RATE } from 'utils/constants';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { useRecoilValue } from 'recoil';

const h1Style = css`
  color : var(--gray5);
  margin : 0;
  display: grid;
  gap: 0.7rem;
  span {
    color: var(--white);
  }
`;

const ScenarioDescription = ({
  year, month, day, selectedCoin, price,
}) => {
  const formatPrice = useFormattedPrice();
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const convertedToKRW = localeCurrency === BASE_CURRENCY ? price : price / EXCHANGE_RATE[`${BASE_CURRENCY}TO${localeCurrency}`];
  const formattedPrice = formatPrice(convertedToKRW);

  return (
    <h1 css={h1Style}>
      <div>
        내가 만약
      </div>
      <span>
        {`${year}년 ${month}월 ${day}일에`}
      </span>

      <div>
        <span>{formattedPrice}</span>
        으로
      </div>
      <div>
        <span>{selectedCoin.name}</span>
        을 샀다면,
      </div>
    </h1>
  );
};

ScenarioDescription.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,

  selectedCoin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,

  price: PropTypes.number.isRequired,
};

export default ScenarioDescription;
