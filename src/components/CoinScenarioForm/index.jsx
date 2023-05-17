import React, { useState, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';
import DateInput from './DateInput';
import BuyPriceInput from './BuyPriceInput';
import CoinTypeDropDown from './CoinTypeDropDown';
import ScenarioDescription from './ScenarioDescription';

const containerStyle = css`
  max-width : 44.5rem;
  height: 94.5rem;
  background-color: var(--gray1);
  border-radius: 2.4rem;
`;

const CoinScenarioForm = () => {
  const setScenarioData = useSetRecoilState(scenarioInputAtom);

  const [selectedDate, setSelectedDate] = useState(null);
  const inputRef = useRef(null);
  const [selectedCoin, setSelectedCoin] = useState({
    id: 'bitcoin',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  });

  const [year, month, day] = selectedDate
    ? [selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()]
    : [0, 0, 0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setScenarioData({
      date: {
        year,
        month,
        day,
      },
      price: inputRef.current.value,
      coinType: { id: selectedCoin.id, name: selectedCoin.name },

    });
    const url = '';
    const { data, loading, error } = useFetch(url);
  };

  return (
    <div css={containerStyle}>
      <ScenarioDescription
        year={year}
        month={month}
        day={day}
        selectedCoin={selectedCoin}
        price={inputRef.current?.value ? inputRef.current.value : 0}
      />
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
