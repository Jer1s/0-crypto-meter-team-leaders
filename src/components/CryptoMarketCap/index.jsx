/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';
import { getCryptoMockData } from 'api/mockDataAPI';
import parseMarketCapData from 'utils/parseMarketCapData';
import CryptoMarketCapList from './CryptoMarketCapList';

const mainContainerStyle = css`
  padding-bottom: 11.4rem;
`;

const headerStyle = css`
  margin: 0;
  font-size: 2.6rem;
  letter-spacing: -0.3px;
`;

const bodyStyle = css`
  margin-top: 1.6rem;
`;

const CryptoMarketCap = () => {
  const [order, setOrder] = useState('marketCap');
  const [cryptoList, setCryptoList] = useState([]);

  const sortedCryptoList = cryptoList.sort((a, b) => {
    let orderVal = order;
    let isAscending = false;

    if (orderVal.endsWith('Ascend')) {
      orderVal = orderVal.slice(0, -'Ascend'.length);
      isAscending = true;
    }

    const valueA = a[orderVal];
    const valueB = b[orderVal];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return isAscending ? valueA - valueB : valueB - valueA; // 숫자 비교
    }

    const nameA = String(valueA).toUpperCase(); // 문자열 비교
    const nameB = String(valueB).toUpperCase();

    if (nameA < nameB) {
      return isAscending ? 1 : -1;
    }
    if (nameA > nameB) {
      return isAscending ? -1 : 1;
    }
    return 0;
  });

  const clickHandlers = {
    marketCapRankSort: () => {
      if (order === 'marketCapAscend') {
        setOrder('marketCapAscend');
      } else {
        setOrder('marketCap');
      }
    },
    nameSort: () => {
      if (order === 'name') {
        setOrder('nameAscend');
      } else {
        setOrder('name');
      }
    },
    currentPriceSort: () => {
      if (order === 'currentPrice') {
        setOrder('currentPriceAscend');
      } else {
        setOrder('currentPrice');
      }
    },
    marketCapSort: () => {
      if (order === 'marketCap') {
        setOrder('marketCapAscend');
      } else {
        setOrder('marketCap');
      }
    },
    totalVolumeSort: () => {
      if (order === 'totalVolume') {
        setOrder('totalVolumeAscend');
      } else {
        setOrder('totalVolume');
      }
    },
    pc1hSort: () => {
      if (order === 'pc1h') {
        setOrder('pc1hAscend');
      } else {
        setOrder('pc1h');
      }
    },
    pc24hSort: () => {
      if (order === 'pc24h') {
        setOrder('pc24hAscend');
      } else {
        setOrder('pc24h');
      }
    },
    pc7dSort: () => {
      if (order === 'pc7d') {
        setOrder('pc7dscend');
      } else {
        setOrder('pc7d');
      }
    },
  };

  const handleLoad = async () => {
    const result = await getCryptoMockData();
    setCryptoList(parseMarketCapData(result));
  };

  useEffect(() => {
    handleLoad();
  }, [order]);

  return (
    <MainContainer css={mainContainerStyle}>
      <div key="headerContent">
        <h2 css={headerStyle}>전체 암호화폐 시세</h2>
      </div>
      <div key="bodyContent">
        <div css={bodyStyle}>
          <CryptoMarketCapList
            cryptoList={sortedCryptoList}
            clickHandlers={clickHandlers}
            order={order}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCap;
