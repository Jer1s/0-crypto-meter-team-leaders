/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';

const buttonStyle = css`
  padding : 0.6rem 1.2rem;
  height: 3rem;
  border: 0.1rem solid var(--gray7);
  border-radius: 2.3rem;
  color: var(--gray9);
  font-size: 1.4rem;
`;

const AddPriceButton = ({ value, onBuyPrice }) => {
  const formattedPrice = useFormattedPrice();
  const handleClickPlusPrice = () => {
    onBuyPrice((prev) => { return prev + value; });
  };
  return (
    <button type="button" css={buttonStyle} onClick={handleClickPlusPrice}>{formattedPrice(value)}</button>
  );
};

AddPriceButton.propTypes = {
  value: PropTypes.number.isRequired,
  onBuyPrice: PropTypes.func.isRequired,
};

export default AddPriceButton;
