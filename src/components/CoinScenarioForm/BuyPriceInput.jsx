import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const BuyPriceInput = () => {
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);
  console.log(currencySign, currencyUnit);

  return (
    <div css={coinScenarioInputStyle}>
      <input placeholder="0" />
      <p>
        {currencyUnit}
        (
        {currencySign}
        )
      </p>
    </div>

  );
};

export default BuyPriceInput;
