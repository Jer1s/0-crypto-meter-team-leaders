/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';
import PriceChangeChip from './PriceChangeChip';

const containerStyle = css`
  display: flex;
  gap: 5rem;
`;

const CryptoMarketCapList = ({ cryptoList }) => {
  const formatPrice = useFormattedPrice(true);

  return (
    <ul>
      {cryptoList.map((item) => {
        const currentPrice = formatPrice(item.currentPrice);
        const marketCap = formatPrice(item.marketCap);
        const totalVolume = formatPrice(item.totalVolume);
        return (
          <li key={item.id} css={containerStyle}>
            <img src={item.image} alt={`${item.id} Symbol`} width="30" />
            <div>
              {item.name}
              {item.symbol}
            </div>
            <div>
              {currentPrice}
            </div>
            <div>
              {marketCap}
            </div>
            <div>
              {totalVolume}
            </div>
            <PriceChangeChip priceChange={item.pc1h} />
            <PriceChangeChip priceChange={item.pc24h} />
            <PriceChangeChip priceChange={item.pc7d} />
          </li>
        );
      })}
    </ul>
  );
};

CryptoMarketCapList.propTypes = {
  cryptoList: PropTypes.arrayOf(
    Object,
  ),
};

export default CryptoMarketCapList;
