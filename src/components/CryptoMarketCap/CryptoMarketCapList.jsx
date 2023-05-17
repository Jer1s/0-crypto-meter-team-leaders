/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const containerStyle = css`
  display: flex;
  gap: 5rem;
`;

const CryptoMarketCapList = ({ cryptoList }) => {
  return (
    <>
      {cryptoList.map((item) => {
        return (
          <div key={item.id} css={containerStyle}>
            <img src={item.image} alt={`${item.id} Symbol`} width="30" />
            <div>
              {item.name}
              {item.symbol}
            </div>
            <div>
              {item.currentPrice}
            </div>
            <div>
              {item.marketCap}
            </div>
            <div>
              {item.totalVolume}
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
