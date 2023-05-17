import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
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
  width: 365px;
  height: 64px;

  background: var(--white);
  border-radius: 35px;
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
  const { currencyUnit } = useRecoilValue(localeCurrencySelector);
  const [selectedDate, setSelectedDate] = useState(null);
  const [buyPrice, setBuyPrice] = useState(0);
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
            {currencyUnit === '원' ? (
              <div css={addPriceButtonContainerStyle}>
                <AddPriceButton value={5000} />
                <AddPriceButton value={10000} />
                <AddPriceButton value={50000} />
                <AddPriceButton value={100000} />
              </div>
            ) : (
              <div css={addPriceButtonContainerStyle}>
                <AddPriceButton value={10000} />
                <AddPriceButton value={50000} />
                <AddPriceButton value={100000} />
                <AddPriceButton value={500000} />
                <AddPriceButton value={1000000} />
              </div>
            )}
          </div>
          <CoinTypeDropDown selectedCoin={selectedCoin} onCoinSelect={setSelectedCoin} />
        </div>
        <button type="submit" css={submitButtonStyle}>오늘 얼마가 되었을까?</button>
      </form>
    </div>
  );
};

export default CoinScenarioForm;
