/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import PropTypes from 'prop-types';
import orderNone from 'assets/order-none.svg';
import orderAscending from 'assets/order-ascending.svg';
import orderDesending from 'assets/order-desending.svg';
import { useEffect, useState } from 'react';
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
  grid-template-columns: 5.7rem minmax(15.9rem, 1fr) 16.5rem 20.9rem 20.9rem 14.6rem 14rem 14rem;
  align-items: center;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 2rem 0;
  height: 7.3rem;

  * {
    justify-self: end;
  }

  & > *:nth-of-type(1),
  & > *:nth-of-type(2) {
    justify-self: start;
  }

  & > *:nth-of-type(2) {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-gap: 1.2rem;
  }

  @media (max-width: 1199px) {
  }
`;

const headerStyle = css`
  display: grid;
  grid-template-columns: 5.7rem minmax(15.9rem, 1fr) 16.5rem 20.9rem 20.9rem 14.6rem 14rem 14rem;
  border-bottom: 0.1rem solid var(--gray8);
  padding: 0;
  padding-bottom: 1.8rem;

  & > * {
    justify-self: end;
  }

  & > *:nth-of-type(1),
  & > *:nth-of-type(2) {
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

const secondLineStyle = css`
  font-size: 1.2rem;
  color: var(--gray5);
`;

const imageStyle = css`
  width: 3rem;
  height: 3rem;
`;

const CryptoMarketCapList = ({ cryptoList, clickHandlers, order }) => {
  const formatPrice = useFormattedPrice(true);
  const [srcList, setSrcList] = useState([
    orderAscending,
    orderNone,
    orderNone,
    orderNone,
    orderNone,
    orderNone,
    orderNone,
    orderNone,
  ]);

  useEffect(() => {
    const updatedSrcList = [];

    if (order === 'marketCapRank') {
      updatedSrcList.push(orderAscending);
    } else {
      updatedSrcList.push(order === 'marketCapRankAscend' ? orderDesending : orderNone);
    }

    if (order === 'name') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'nameAscend' ? orderAscending : orderNone);
    }

    if (order === 'currentPrice') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'currentPriceAscend' ? orderAscending : orderNone);
    }

    if (order === 'marketCap') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'marketCapAscend' ? orderAscending : orderNone);
    }

    if (order === 'totalVolume') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'totalVolumeAscend' ? orderAscending : orderNone);
    }

    if (order === 'pc1h') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'pc1hAscend' ? orderAscending : orderNone);
    }

    if (order === 'pc24h') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'pc24hAscend' ? orderAscending : orderNone);
    }

    if (order === 'pc7d') {
      updatedSrcList.push(orderDesending);
    } else {
      updatedSrcList.push(order === 'pc7dAscend' ? orderAscending : orderNone);
    }

    setSrcList(updatedSrcList);
  }, [order]);

  return (
    <ul css={listStyle}>
      <li css={headerStyle}>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.marketCapRankSort} css={buttonStyle}>
            #
            <img src={srcList[0]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.nameSort} css={buttonStyle}>
            화폐 이름
            <img src={srcList[1]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.currentPriceSort} css={buttonStyle}>
            가격
            <img src={srcList[2]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.marketCapSort} css={buttonStyle}>
            총 시가
            <img src={srcList[3]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.totalVolumeSort} css={buttonStyle}>
            24시간 거래량
            <img src={srcList[4]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.pc1hSort} css={buttonStyle}>
            1시간 변동폭
            <img src={srcList[5]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.pc24hSort} css={buttonStyle}>
            24시간 변동폭
            <img src={srcList[6]} alt="Order" />
          </button>
        </div>
        <div css={headerItemStyle}>
          <button type="button" onClick={clickHandlers.pc7dSort} css={buttonStyle}>
            7일 변동폭
            <img src={srcList[7]} alt="Order" />
          </button>
        </div>
      </li>
      {cryptoList.map((item) => {
        const currentPrice = formatPrice(item.currentPrice);
        const marketCap = formatPrice(item.marketCap);
        const totalVolume = formatPrice(item.totalVolume);
        const volumePerPrice = item.volumePerPrice.toLocaleString();
        return (
          <li key={item.marketCapRank} css={itemStyle}>
            <div>{item.marketCapRank}</div>
            <div>
              <img src={item.image} alt={`${item.id} Symbol`} css={imageStyle} />
              <div>
                {item.name}
                <div css={secondLineStyle}>
                  {item.symbol}
                </div>
              </div>
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
              <div css={secondLineStyle} style={{ textAlign: 'right' }}>
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
  clickHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
  order: PropTypes.string.isRequired,
};

export default CryptoMarketCapList;
