/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import localeCurrencySelector from 'recoils/selectors/localeCurrencySelector';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import localeCurrencyAtom from 'recoils/atoms/localeCurrencyAtom';
import { LOCALE_CURRENCY } from 'utils/constants';
import { navButtonStyle } from './navButtonStyle';
import LocaleCurrencyData from './LocaleCurrencyData';

const buttonStyle = css`
  gap: 1.6rem;
  padding-right: 1rem;

  @media (max-width: 767px) {
    gap: 0.8rem;
    padding-right: 1.3rem;
    padding-left: 1.6rem;
  }
`;

const selectButtonStyle = css`
  cursor: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  position: absolute;
  margin-top: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);
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
  const [localeCurrency, setLocaleCurrency] = useRecoilState(localeCurrencyAtom);
  const { currencySign, currencyUnit } = useRecoilValue(localeCurrencySelector);

  const toggleCurrencySelector = () => {
    setIsActive((prev) => { return !prev; });
  };

  const selectLocaleCurrency = (currencyKey) => {
    setLocaleCurrency(currencyKey);
  };

  return (
    <div>
      <button type="button" onClick={toggleCurrencySelector} css={[navButtonStyle, buttonStyle]}>
        <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
        <div css={mobileTextStyle}>{currencySign}</div>
        <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />
      </button>
      {isActive && (
      <div css={[navButtonStyle, selectButtonStyle]}>
        {Object.keys(LOCALE_CURRENCY).map((currencyKey) => {
          const currencyData = LOCALE_CURRENCY[currencyKey];
          return (
            <LocaleCurrencyData
              key={currencyKey}
              selectLocaleCurrency={selectLocaleCurrency}
              currencyKey={currencyKey}
              currencyUnit={currencyData.currencyUnit}
              currencySign={currencyData.currencySign}
              localeCurrency={localeCurrency}
            />
          );
        })}
      </div>
      )}
    </div>
  );
};

export default SelectCurrencyButton;
