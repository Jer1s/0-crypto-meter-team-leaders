import React from 'react';
/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import PropTypes from 'prop-types';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const BuyPriceInput = ({ inputRef }) => {
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  return (
    <div css={coinScenarioInputStyle}>
      <input className="inputBox" placeholder="0" ref={inputRef} />
      <p>
        {currencyUnit}
        (
        {currencySign}
        )
      </p>
    </div>

  );
};

BuyPriceInput.propTypes = {
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
export default BuyPriceInput;
