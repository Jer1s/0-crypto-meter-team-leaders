/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import Triangle from 'assets/triangle.png';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { navButtonStyle } from './navButtonStyle';
import SelectCurrencyPopup from './SelectCurrencyPopup';

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  width: 9rem;
  padding: 1.1rem 1rem 1.1rem 1.5rem;

  @media (max-width: 767px) {
    width: 5.9rem;
    padding: 1.2rem 1.2rem 1.2rem 1.6rem;
  }
`;

const imgStyle = css`
  width: 1rem;

  @media (max-width: 767px) {
    width: 0.8rem;
  }
`;

const textStyle = css`
  line-height: 1.8rem;
  letter-spacing: -0.3px;

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
      <button
        type="button"
        onClick={toggleCurrencySelector}
        css={[navButtonStyle, buttonStyle]}
      >
        <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
        <div css={mobileTextStyle}>{currencySign}</div>
        {isActive ? <img css={imgStyle} src={Triangle} alt="Triangle" /> : <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />}
      </button>
      {isActive && (<SelectCurrencyPopup />)}
    </div>
  );
};

export default SelectCurrencyButton;
