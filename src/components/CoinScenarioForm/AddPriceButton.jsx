/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useFormatPriceToSign from 'hooks/useFormatPriceToSign';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';
import useCurrencyConverter from 'hooks/useCurrencyConverter';
import { buyPriceAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import { useSetRecoilState } from 'recoil';
import useFormatPriceToSign from 'hooks/useFormatPriceToSign';

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
    height: 2.3rem;
    padding : 0.4rem 1rem;
    font-size: 1.2rem;
  }
`;

const AddPriceButton = ({ value }) => {
  const setBuyPrice = useSetRecoilState(buyPriceAtom);
  const convertCurrency = useCurrencyConverter();
  // const formatPrice = useFormattedPrice();
  const formatPrice = useFormatPriceToSign();

  const handleClickPlusPrice = () => {
    setBuyPrice((prev) => { return prev + value; });
    // setBuyPrice((prev) => { return prev + convertCurrency(value); });
  };
  return (
    <button type="button" css={buttonStyle} onClick={handleClickPlusPrice}>{formatPrice(value)}</button>
  );
};

AddPriceButton.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AddPriceButton;
