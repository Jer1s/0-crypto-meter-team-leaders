import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useFormattedPrice from 'hooks/useFormattedPrice';

const h1Style = css`
  color : var(--gray5);
  span {
    color: var(--white);
  }
`;

const ScenarioDescription = ({
  year, month, day, selectedCoin, price,
}) => {
  const formattedPrice = useFormattedPrice();
  console.log(selectedCoin);
  // const price = inputRef.current ? inputRef.current.value : 0

  return (
    <h1 css={h1Style}>
      내가 만약
      {' '}
      <br />
      <span>
        {year}
        년
        {' '}
        {month}
        월
        {' '}
        {day}
        일
      </span>
      에
      {' '}
      <br />
      <span>{formattedPrice(price)}</span>
      으로
      {' '}
      <br />
      <span>{selectedCoin.name}</span>
      을 샀다면,

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
