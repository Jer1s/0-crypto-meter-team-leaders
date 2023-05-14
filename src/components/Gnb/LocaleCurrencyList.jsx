/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { LOCALE_CURRENCY } from 'utils/constants';
import { navButtonStyle } from './navButtonStyle';

const popUpSelectorStyle = css`
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-top: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);

  @media (max-width: 767px) {
    padding: 0.4rem;
  }
`;

const currencyDataStyle = css`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  width: 100%;
  border: none;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  line-height: 1.8rem;
`;

const highlightStyle = css`
  background-color: var(--gray7);
`;

const textStyle = css`
  @media (max-width: 767px) {
    display: none
  }
`;

const mobileTextStyle = css`
  display: none;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const LocaleCurrencyList = () => {
  const [localeCurrency, setLocaleCurrency] = useRecoilState(localeCurrencyAtom);

  const handleClick = (currencyKey) => {
    setLocaleCurrency(currencyKey);
  };

  return (
    <div css={[navButtonStyle, popUpSelectorStyle]}>
      {Object.keys(LOCALE_CURRENCY).map((key) => {
        const { currencyUnit, currencySign } = LOCALE_CURRENCY[key];
        return (
          <button
            key={key}
            type="button"
            onClick={() => { return handleClick(key); }}
            css={[currencyDataStyle, (key === localeCurrency) && highlightStyle]}
          >
            <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
            <div css={mobileTextStyle}>{`${currencySign}`}</div>
          </button>
        );
      })}
    </div>
  );
};

export default LocaleCurrencyList;
