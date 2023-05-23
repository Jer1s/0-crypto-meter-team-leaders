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
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--gray2);
  overflow-x: auto;
  overflow-x: overlay;
`;

const itemStyle = css`
  display: grid;
  grid-template-columns: 5.7rem minmax(15.9rem, 1fr) 16.5rem 20.9rem 20.9rem 14.6rem 14rem 14rem;
  align-items: center;
  border-bottom: 0.1rem solid var(--gray8);
  height: 7.3rem;

  & > *:nth-of-type(2) {
    align-items: center;
    height: 100%;
  }

  & > *:nth-of-type(n+3) {
    justify-self: end;
    text-align: end;
  }

  @media (max-width: 1880px) {
    width: 122rem;

    & > *:nth-of-type(1) {
      display: flex;
      align-items: center;
      position: sticky;
      height: 100%;
      left: 0;
      background-color: var(--white);
    }
    
    & > *:nth-of-type(2) {
      position: sticky;
      left: 5.7rem;
      background-color: var(--white);
      border-right: 0.1rem solid var(--gray8);
      box-shadow: 0.4rem 0 1.5rem var(--market-cap-list-box-shadow);
    }
  
  @media (max-width: 767px) {
    width: 102rem;
    grid-template-columns: 2.4rem 11.4rem 16.5rem 17.7rem 17.7rem 12rem 12rem 12rem;
    font-size: 1.3rem;

    & > *:nth-of-type(2) {
      left: 2.4rem;
    }
  }
}
`;

const cryptoNameStyle = css`
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-gap: 1.2rem;
`;

const headerItemStyle = css`
  height: 5.2rem;
  
  & > * {
    gap: 0.4rem;
  }

  & > *:nth-of-type(2) {
      display: flex;
      grid-gap: 0;
    }
  
  @media (max-width: 767px) {
    & > *:first-of-type {
      gap: 0;
    }

    & > *:nth-of-type(2) {
      padding-left: 0.6rem;
    }
  }
`;

const buttonStyle = css`
  cursor: pointer;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
`;

const secondLineStyle = css`
  font-size: 1.2rem;
  font-weight: 500;
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

  const headerItems = [
    {
      label: '#', clickHandler: clickHandlers.marketCapRankSort, srcIndex: 0, alt: 'Order',
    },
    {
      label: '화폐 이름', clickHandler: clickHandlers.nameSort, srcIndex: 1, alt: 'Order',
    },
    {
      label: '가격', clickHandler: clickHandlers.currentPriceSort, srcIndex: 2, alt: 'Order',
    },
    {
      label: '총 시가', clickHandler: clickHandlers.marketCapSort, srcIndex: 3, alt: 'Order',
    },
    {
      label: '24시간 거래량', clickHandler: clickHandlers.totalVolumeSort, srcIndex: 4, alt: 'Order',
    },
    {
      label: '1시간 변동폭', clickHandler: clickHandlers.pc1hSort, srcIndex: 5, alt: 'Order',
    },
    {
      label: '24시간 변동폭', clickHandler: clickHandlers.pc24hSort, srcIndex: 6, alt: 'Order',
    },
    {
      label: '7일 변동폭', clickHandler: clickHandlers.pc7dSort, srcIndex: 7, alt: 'Order',
    },
  ];

  return (
    <ul css={listStyle}>
      <li css={[itemStyle, headerItemStyle]}>
        {headerItems.map((item) => {
          const {
            label, clickHandler, srcIndex, alt,
          } = item;
          return (
            <button key={srcIndex} type="button" onClick={clickHandler} css={buttonStyle}>
              {label}
              <img src={srcList[srcIndex]} alt={alt} />
            </button>
          );
        })}
      </li>
      {cryptoList.map((item) => {
        const currentPrice = item.currentPrice ? formatPrice(item.currentPrice) : '-';
        const marketCap = item.marketCap ? formatPrice(item.marketCap) : '-';
        const totalVolume = item.totalVolume ? formatPrice(item.totalVolume) : '-';
        const volumePerPrice = item.volumePerPrice ? item.volumePerPrice.toLocaleString() : '-';
        return (
          <li key={item.id} css={itemStyle}>
            <div>
              {item.marketCapRank || '-'}
            </div>
            <div css={cryptoNameStyle}>
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
