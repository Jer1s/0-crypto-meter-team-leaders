/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import localeCurrencyAtom from 'recoils/atoms/localeCurrencyAtom';
import { LOCALE_CURRENCY } from 'utils/constants';
import { navButtonStyle } from './navButtonStyle';

const selectButtonStyle = css`
  cursor: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: absolute;
  margin-top: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);
`;

const currencyDataStyle = css`
  cursor: pointer;
  display: flex;
  width: 100%;
  border: none;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  line-height: 1.8rem;
`;

const highlightStyle = css`
  background-color: var(--gray7);
`;

const LocaleCurrencyList = () => {
  const [localeCurrency, setLocaleCurrency] = useRecoilState(localeCurrencyAtom);

  const handleClick = (currencyKey) => {
    setLocaleCurrency(currencyKey);
  };

  return (
    <div css={[navButtonStyle, selectButtonStyle]}>
      {Object.keys(LOCALE_CURRENCY).map((key) => {
        const { currencyUnit, currencySign } = LOCALE_CURRENCY[key];
        return (
          <button
            key={key}
            type="button"
            onClick={() => { return handleClick(key); }}
            css={[currencyDataStyle, (key === localeCurrency) && highlightStyle]}
          >
            {`${currencyUnit} (${currencySign})`}
          </button>
        );
      })}
    </div>
  );
};

export default LocaleCurrencyList;
