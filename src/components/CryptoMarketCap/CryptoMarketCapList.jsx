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
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: var(--gray2);
`;

const itemStyle = css`
  display: grid;
  grid-template-columns: 57fr 217fr 165fr 209fr 209fr 146fr 140fr 140fr;
  grid-auto-flow: column;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 2rem 0;

  * {
    justify-self: end;
  }

  *:nth-of-type(1),
  *:nth-of-type(2) {
    justify-self: start;
  }
`;

const headerStyle = css`
  display: grid;
  grid-template-columns: 57fr 217fr 165fr 209fr 209fr 146fr 140fr 140fr;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 0;
  padding-bottom: 1.8rem;

  * {
    justify-self: end;
  }

  *:nth-of-type(1),
  *:nth-of-type(2) {
    justify-self: start;
  }
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

const imageStyle = css`
  width: 3rem;
  height: 3rem;
`;

const CryptoMarketCapList = ({ cryptoList }) => {
  const formatPrice = useFormattedPrice(true);

  const handleClick = () => {
    return null;
  };

  return (
    <ul css={listStyle}>
      <li css={headerStyle}>
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
        const volumePerPrice = item.volumePerPrice.toLocaleString();
        return (
          <li key={item.id} css={itemStyle}>
            <div>{index + 1}</div>
            <div>
              <img src={item.image} alt={`${item.id} Symbol`} css={imageStyle} />
              <div>{item.name}</div>
              <div>{item.symbol}</div>
            </div>
            <div>
              {currentPrice}
            </div>
            <div>
              {marketCap}
            </div>
            <div>
              <div>
                {totalVolume}
              </div>
              <div>
                {`${volumePerPrice} ${item.symbol}`}
              </div>
            </div>
            <div>
              <PriceChangeChip priceChange={item.pc1h} />
            </div>
            <div>
              <PriceChangeChip priceChange={item.pc24h} />
            </div>
            <div>
              <PriceChangeChip priceChange={item.pc7d} />
            </div>
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
