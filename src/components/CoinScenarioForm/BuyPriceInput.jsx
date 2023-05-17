import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import PropTypes from 'prop-types';
// import useFormattedPrice from 'hooks/useFormattedPrice';
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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBuyPrice(Number(value.replace(/,/g, '')));
  };
  const formatValue = (value) => {
    return value.toLocaleString();
  };

  return (
    <div css={[coinScenarioInputStyle, buyPriceInputStyle(buyPrice)]}>
      <input css={buyPriceInputStyle} className="inputBox" value={formatValue(buyPrice)} onChange={handleInputChange} />
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
