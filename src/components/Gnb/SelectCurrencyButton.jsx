/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import localeCurrencySelector from 'recoils/selectors/localeCurrencySelector';
import { useRecoilValue } from 'recoil';
import { navButtonStyle } from './navButtonStyle';

const buttonStyle = css`
  gap: 1.6rem;
  padding-right: 1rem;

  @media (max-width: 767px) {
    gap: 0.8rem;
    padding-right: 1.3rem;
    padding-left: 1.6rem;
  }
`;

const imgStyle = css`
  width: 1rem;
  height: 0.6rem;
`;

// 추후에 recoil로 관리해야함 (원/달러, ₩/$)
const textStyle = css`
  @media (max-width: 767px) {
    display: none
  }
`;

const mobileTextStyle = css`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const SelectCrurencyButton = () => {
  const { currencySign, currencyUnit } = useRecoilValue(localeCurrencySelector);

  return (
    <button type="button" css={[navButtonStyle, buttonStyle]}>
      <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
      <div css={mobileTextStyle}>{currencySign}</div>
      <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />
    </button>
  );
};

export default SelectCrurencyButton;
