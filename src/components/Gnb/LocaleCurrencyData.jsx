/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

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

const LocaleCurrencyData = ({
  currencyKey, currencyUnit, currencySign, localeCurrency, selectLocaleCurrency,
}) => {
  const handleClick = () => {
    selectLocaleCurrency(currencyKey);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      css={[currencyDataStyle, (currencyKey === localeCurrency) && highlightStyle]}
    >
      {`${currencyUnit} (${currencySign})`}
    </button>
  );
};

LocaleCurrencyData.propTypes = {
  currencyKey: PropTypes.string.isRequired,
  currencyUnit: PropTypes.string.isRequired,
  currencySign: PropTypes.string.isRequired,
  localeCurrency: PropTypes.string.isRequired,
  selectLocaleCurrency: PropTypes.func.isRequired,
};

export default LocaleCurrencyData;
