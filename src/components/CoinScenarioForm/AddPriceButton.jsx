/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';
import currencyConverter from 'utils/currencyConverter';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';

const buttonStyle = css`
  padding : 0.6rem 1.2rem;
  height: 3rem;
  border: 0.1rem solid var(--gray7);
  border-radius: 2.3rem;
  color: var(--gray9);
  font-size: 1.4rem;

  @media (max-width: 1199px){
    color: var(--gray2);
    border: 0.1rem solid var(--gray3);
  }

  @media (max-width: 768px){
    color: var(--gray2);
    border: 0.1rem solid var(--gray3);
    height: 2.3rem;
    padding : 0.4rem 1rem;
    font-size: 1.2rem;
  }
`;

const AddPriceButton = ({ value, onBuyPrice }) => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const formatPrice = useFormattedPrice();
  const handleClickPlusPrice = () => {
    onBuyPrice((prev) => { return prev + currencyConverter(value, localeCurrency); });
  };
  return (
    <button type="button" css={buttonStyle} onClick={handleClickPlusPrice}>{formatPrice(value)}</button>
  );
};

AddPriceButton.propTypes = {
  value: PropTypes.number.isRequired,
  onBuyPrice: PropTypes.func.isRequired,
};

export default AddPriceButton;
