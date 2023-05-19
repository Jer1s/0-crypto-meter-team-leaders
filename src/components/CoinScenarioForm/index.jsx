import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { BASE_CURRENCY, INITAIL_BITCOIN } from 'utils/constants';
import DateInput from './DateInput';
import BuyPriceInput from './BuyPriceInput';
import CoinTypeDropDown from './CoinTypeDropDown';
import ScenarioDescription from './ScenarioDescription';
import AddPriceButton from './AddPriceButton';

const containerStyle = css`
  max-width : 44.5rem;
  height: 94.5rem;
  background-color: var(--gray1);
  border-radius: 2.4rem;
  padding: 6rem 4rem 7rem;

  h1 {
    font-weight: 600;
    font-size: 3.6rem;
  }
`;

const submitButtonStyle = css`
  width: 36.5rem;
  height: 6.4rem;

  background: var(--white);
  border-radius: 3.5rem;
`;

const inputContainerStyle = css`
  margin: 5.5rem 0 18.9rem;
  display : flex;
  flex-direction: column;
  gap : 2.5rem;
`;

const buyPriceInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const addPriceButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  justify-content: end;
`;

const CoinScenarioForm = () => {
  const setScenarioData = useSetRecoilState(scenarioInputAtom);
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const [selectedDate, setSelectedDate] = useState(null);
  const [buyPrice, setBuyPrice] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(INITAIL_BITCOIN);

  const [year, month, day] = selectedDate
    ? [selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()]
    : [0, 0, 0];

  const addButtonData = localeCurrency === BASE_CURRENCY
    ? [5000, 10000, 50000, 100000]
    : [10000, 50000, 100000, 500000, 1000000];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setScenarioData({
      date: {
        year,
        month,
        day,
      },
      price: buyPrice,
      coinType: { id: selectedCoin.id, name: selectedCoin.name },

    });
    // const url = '';
    // const { data, loading, error } = useFetch(url);
  };

  return (
    <div css={containerStyle}>
      <ScenarioDescription
        year={year}
        month={month}
        day={day}
        selectedCoin={selectedCoin}
        price={buyPrice}
      />
      <form onSubmit={handleSubmit}>
        <div css={inputContainerStyle}>
          <DateInput selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
          <div css={buyPriceInputStyle}>
            <BuyPriceInput buyPrice={buyPrice} setBuyPrice={setBuyPrice} />
            <div css={addPriceButtonContainerStyle}>
              {addButtonData.map((value) => {
                return <AddPriceButton key={value} value={value} onBuyPrice={setBuyPrice} />;
              })}
            </div>
          </div>
          <CoinTypeDropDown selectedCoin={selectedCoin} onCoinSelect={setSelectedCoin} />
        </div>
        <button type="submit" css={submitButtonStyle} onClick={handleSubmit}>오늘 얼마가 되었을까?</button>
      </form>
    </div>
  );
};

export default CoinScenarioForm;
