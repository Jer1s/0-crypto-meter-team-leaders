import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import PropTypes from 'prop-types';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const buyPriceInputStyle = (buyPrice) => {
  return css`
& .inputBox {
  color : ${buyPrice === 0 && 'var(--gray4)'}
}  
`;
};
const BuyPriceInput = ({ buyPrice, setBuyPrice }) => {
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  const validateInput = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const numberTypeValue = Number(value.replace(/,/g, ''));
    if (validateInput(numberTypeValue)) {
      setBuyPrice(numberTypeValue);
    }
  };

  const formatValue = (value) => {
    return value.toLocaleString();
  };

  return (
    <div css={[coinScenarioInputStyle, buyPriceInputStyle(buyPrice)]}>
      <input type="text" css={buyPriceInputStyle} className="inputBox" value={formatValue(buyPrice)} onChange={handleInputChange} required />
      <p>
        {currencyUnit}
        {' '}
        (
        {currencySign}
        )
      </p>
    </div>

  );
};

BuyPriceInput.propTypes = {
  buyPrice: PropTypes.number.isRequired,
  setBuyPrice: PropTypes.func.isRequired,
};
export default BuyPriceInput;
