import React, { useState, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';
import DateInput from './DateInput';
import BuyPriceInput from './BuyPriceInput';
import CoinTypeDropDown from './CoinTypeDropDown';

const containerStyle = css`
  max-width : 44.5rem;
  height: 94.5rem;
  background-color: var(--gray1);
  border-radius: 2.4rem;
`;

const CoinScenarioForm = () => {
  const setScenarioData = useSetRecoilState(scenarioInputAtom);
  const [selectedDate, setSelectedDate] = useState(null);
  // const [buyPrice, setBuyPrice] = useState('');
  const inputRef = useRef(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedCoinId = selectedCoin ? selectedCoin.id : null;
    setScenarioData({
      date: {
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        day: selectedDate.getDate(),
      },
      price: inputRef.current.value,
      coinType: selectedCoinId,

    });
  };

  return (
    <div css={containerStyle}>
      <form onSubmit={handleSubmit}>
        <DateInput selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
        <BuyPriceInput inputRef={inputRef} />
        <CoinTypeDropDown selectedCoin={selectedCoin} onCoinSelect={setSelectedCoin} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CoinScenarioForm;
