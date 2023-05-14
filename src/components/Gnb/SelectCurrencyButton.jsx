/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { navButtonStyle } from './navButtonStyle';
import LocaleCurrencyList from './LocaleCurrencyList';

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

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
`;

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

const SelectCurrencyButton = () => {
  const [isActive, setIsActive] = useState(false);
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  const toggleCurrencySelector = () => {
    setIsActive((prev) => { return !prev; });
  };

  return (
    <div css={containerStyle}>
      <button type="button" onClick={toggleCurrencySelector} css={[navButtonStyle, buttonStyle]}>
        <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
        <div css={mobileTextStyle}>{currencySign}</div>
        <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />
      </button>
      {isActive && (<LocaleCurrencyList />)}
    </div>
  );
};

export default SelectCurrencyButton;
