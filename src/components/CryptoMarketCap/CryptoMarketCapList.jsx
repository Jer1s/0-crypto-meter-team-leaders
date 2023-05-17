/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';

const containerStyle = css`
  display: flex;
  gap: 5rem;
`;

const CryptoMarketCapList = ({ cryptoList }) => {
  const formatPrice = useFormattedPrice(true);

  return (
    <>
      {cryptoList.map((item) => {
        const currentPrice = formatPrice(item.currentPrice);
        const marketCap = formatPrice(item.marketCap);
        const totalVolume = formatPrice(item.totalVolume);
        return (
          <div key={item.id} css={containerStyle}>
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
            <div>
              {item.pc1h}
            </div>
            <div>
              {item.pc24h}
            </div>
            <div>
              {item.pc7d}
            </div>
          </div>
        );
      })}
    </>
  );
};

CryptoMarketCapList.propTypes = {
  cryptoList: PropTypes.arrayOf(
    Object,
  ),
};

export default CryptoMarketCapList;
