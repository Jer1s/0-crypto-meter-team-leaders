/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from 'assets/logo.png';
import logoText from 'assets/logo-text.png';
import { useState } from 'react';
import RecalculateButton from './RecalculateButton';
import SelectCurrencyButton from './SelectCurrencyButton';
import SearchHistoryButton from './SearchHistoryButton';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding: 2.8rem 6rem 3.2rem 5.6rem;
  max-width: 192rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-right: 2.4rem;
    padding-left: 2.8rem;
  }

  @media (max-width: 767px) {
    padding: 1.4rem 2rem 2rem 2.4rem;
  }
`;

const logoStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 18.6rem;

  @media (max-width: 767px) {
    width: 3.5rem
  }
`;

const logoImageStyle = css`
  width: 3.4rem;
  height: 2.6rem;
  margin-top: 0.6rem;
  background-image: url(${logo});
  background-size: 3.5rem 2.6rem;
  background-repeat: no-repeat;
`;

const logoTextStyle = css` 
  width: 14rem;
  height: 2.15rem;
  background-image: url(${logoText});
  background-size: 14rem 2.15rem;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    display: none;
  }
`;

const buttonContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.6rem;

  @media (max-width: 767px) {
  }
`;

const Gnb = () => {
  const [activeButton, setActiveButton] = useState('');
  return (
    <nav css={navStyle}>
      <div css={logoStyle}>
        <div css={logoImageStyle} />
        <div css={logoTextStyle} />
      </div>
      <div css={buttonContainerStyle}>
        <RecalculateButton />
        <SelectCurrencyButton activeButton={activeButton} setActiveButton={setActiveButton} />
        <SearchHistoryButton activeButton={activeButton} setActiveButton={setActiveButton} />
      </div>
    </nav>
  );
};

export default Gnb;
