/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { BASE_CURRENCY } from 'utils/constants';
import DateInput from './DateInput';
import BuyPriceInput from './BuyPriceInput';
import CoinTypeDropDown from './CoinTypeDropDown';
import AddPriceButton from './AddPriceButton';

const FormStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5.5rem;
`;

const submitButtonStyle = css`
  flex-basis: 6.4rem;
  flex-shrink: 0;
  background-color: var(--white);
  border: none;
  border-radius: 3.5rem;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 100%;
    background-color: var(--gray1);
    color: var(--white);
  }

  @media (max-width: 1199px) {
    height: 5.9rem;
  }
`;

const inputContainerStyle = css`
  display : flex;
  flex-direction: column;
  gap : 2.5rem;
`;

const buyPriceInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 1199px){
    gap: 0.8rem;
  }
`;

const addPriceButtonContainerStyle = css`
  display: flex;
  gap: 0.8rem;
  justify-content: end;

  @media (max-width: 1199px){
    justify-content: start;
  }
`;

const ScenarioForm = ({
  formProps,
}) => {
  const {
    selectedCoin,
    setSelectedCoin,
    setBuyPrice,
    buyPrice,
    setSelectedDate,
    selectedDate,
    handleSubmit,
  } = formProps;
  const localeCurrency = useRecoilValue(localeCurrencyAtom);

  const addButtonData = localeCurrency === BASE_CURRENCY
    ? [5000, 10000, 50000, 100000]
    : [10000, 50000, 100000, 500000, 1000000];

  return (
    <form onSubmit={handleSubmit} css={FormStyle}>
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

  );
};

export default ScenarioForm;

ScenarioForm.propTypes = {
  formProps: PropTypes.shape({
    selectedCoin: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    setSelectedCoin: PropTypes.func.isRequired,
    setBuyPrice: PropTypes.func.isRequired,
    buyPrice: PropTypes.number.isRequired,
    setSelectedDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date),
    handleSubmit: PropTypes.func.isRequired,
  }).isRequired,
};
