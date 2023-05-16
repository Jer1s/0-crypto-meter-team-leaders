/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const CryptoMarketCapList = ({ cryptoList }) => {
  return (
    <>
      {cryptoList.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={`${item.id} Symbol`} width="15" />
            {item.symbol}
          </div>
        );
      })}
    </>
  );
};

CryptoMarketCapList.propTypes = {
  crpytoList: PropTypes.array.isRequired,
};

export default CryptoMarketCapList;
