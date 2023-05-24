/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const containerStyle = css`
  margin: 0;
  border-radius: 0.4rem;
  padding: 0.2rem 0.8rem;
  width: 6.6rem;
  height: 2.2rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary);
  background-color: var(--primary-light);
`;

const redStyle = css`
  color: var(--primary-red);
  background-color: var(--primary-red-light);
`;

const PriceChangeChip = ({ priceChange }) => {
  const isSkyrocketed = (priceChange > 0);
  const formattedPriceChange = Number(priceChange).toFixed(2);

  return (
    <p css={[containerStyle, !isSkyrocketed && redStyle]}>
      {formattedPriceChange}
      %
    </p>
  );
};

PriceChangeChip.propTypes = {
  priceChange: PropTypes.number,
};

export default PriceChangeChip;
