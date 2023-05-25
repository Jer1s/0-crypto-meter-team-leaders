import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { buyPriceAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import { useRecoilValue, useRecoilState } from 'recoil';
import exchangeRateSelector from 'recoils/exchangeRate/exchangeRateSelector';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import exchangeRateReverseSelector from 'recoils/exchangeRate/exchangeRateReverseSelector';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const buyPriceInputStyle = (buyPrice) => {
  return css`
& .inputBox {
  color : ${buyPrice === 0 && 'var(--gray4)'}
}  
`;
};
const BuyPriceInput = () => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  const [buyPrice, setBuyPrice] = useRecoilState(buyPriceAtom);
  const [formattedPrice, setFormattedPrice] = useState('');
  const convertPrice = useRecoilValue(exchangeRateSelector);
  const convertPriceToBase = useRecoilValue(exchangeRateReverseSelector);

  const validateInput = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const numberTypeValue = Number(value.replace(/,/g, ''));
    if (validateInput(numberTypeValue)) {
      setBuyPrice(convertPriceToBase(numberTypeValue, localeCurrency));
    }
  };

  useEffect(() => {
    setFormattedPrice(convertPrice(buyPrice, localeCurrency).toLocaleString());
  }, [buyPrice, localeCurrency, convertPrice]);

  return (
    <div css={[coinScenarioInputStyle, buyPriceInputStyle(buyPrice)]}>
      <input type="text" css={buyPriceInputStyle} className="inputBox" value={formattedPrice} onChange={handleInputChange} required />
      <p>
        {`${currencyUnit} (${currencySign})`}
      </p>
    </div>

  );
};

export default BuyPriceInput;
