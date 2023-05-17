/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';
import orderNone from 'assets/order-none.svg';
import orderAscending from 'assets/order-ascending.svg';
// import orderDesending from 'assets/order-desending.svg';
import PriceChangeChip from './PriceChangeChip';

const listStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2rem;
  width: 128.3rem;
`;

const itemStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: var(--gray2);
`;

const headerStyle = css`
  padding-top: 0;
  padding-bottom: 1.8rem;
`;

const headerItemStyle = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--black);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

const buttonStyle = css`
  cursor: pointer;
  display: flex;
  padding: 0;
  border: none;
`;

const rankingStyle = css`
  font-size: 1.4rem;
`;

const crpytoNameStyle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 4rem;
`;

const CryptoMarketCapList = ({ cryptoList }) => {
  const formatPrice = useFormattedPrice(true);

  const handleClick = () => {
    return null;
  };

  return (
    <ul css={listStyle}>
      <li css={[itemStyle, headerStyle]}>
        <div css={headerItemStyle}>
          #
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderAscending} alt="Ascending Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          화폐 이름
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          가격
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          총 시가
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          24시간 거래량
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          1시간 변동폭
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          24시간 변동폭
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          7일 변동폭
          <button type="button" onClick={handleClick} css={buttonStyle}>
            <img src={orderNone} alt="None Order" />
          </button>
        </div>
      </li>
      {cryptoList.map((item, index) => {
        const currentPrice = formatPrice(item.currentPrice);
        const marketCap = formatPrice(item.marketCap);
        const totalVolume = formatPrice(item.totalVolume);
        return (
          <li key={item.id} css={itemStyle}>
            <div css={rankingStyle}>{index + 1}</div>
            <div css={crpytoNameStyle}>
              <img src={item.image} alt={`${item.id} Symbol`} width="30" height="30" />
              <span>{item.name}</span>
              <span>{item.symbol}</span>
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
