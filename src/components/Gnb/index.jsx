/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from 'assets/logo.svg';
import RecalculateButton from './RecalculateButton';
import SelectCurrencyButton from './SelectCurrencyButton';
import SearchHistoryButton from './SearchHistoryButton';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 18.6rem;
  height: 2.6rem;

  @media (max-width: 767px) {
    width: 3.5rem
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
  return (
    <nav css={navStyle}>
      <div css={logoStyle} />
      <div css={buttonContainerStyle}>
        <RecalculateButton />
        <SelectCurrencyButton />
        <SearchHistoryButton />
      </div>
    </nav>
  );
};

export default Gnb;
