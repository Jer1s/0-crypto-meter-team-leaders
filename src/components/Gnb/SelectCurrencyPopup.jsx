/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { LOCALE_CURRENCY } from 'utils/constants';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  position: absolute;
  top: 7.2rem;
  width: 9.06rem;
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);

  @media (max-width: 767px) {
    padding: 0.4rem;
    top: 6rem; 
    width: 6.1rem;
  }
`;

// 팝업 창 width 문제 해결을 못해서 임시 처리
const usdWidthStyle = css`
  width: 10.25rem;

  @media (max-width: 767px) {
    top: 6rem; 
    width: 5.7rem;
  }
`;

const currencyDataStyle = css`
  cursor: pointer;
  display: flex;
  flex-direction: row;
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

const SelectCurrencyPopup = () => {
  const [localeCurrency, setLocaleCurrency] = useRecoilState(localeCurrencyAtom);

  const handleClick = (currencyKey) => {
    setLocaleCurrency(currencyKey);
  };

  return (
    <div css={[
      navButtonStyle,
      popupStyle,
      (localeCurrency === 'USD') && usdWidthStyle,
    ]}
    >
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

export default SelectCurrencyPopup;
