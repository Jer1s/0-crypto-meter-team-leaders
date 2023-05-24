/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useQueryClient } from '@tanstack/react-query';
import MainContainer from 'components/MainContainer';
import useCoinsMarketsJeris from 'hooks/useCoinsMarketsJeris';
import getCoinsMarkets from 'api/getCoinsMarkets';
import parseMarketCapData from 'utils/parseMarketCapData';
import { TOTAL_PAGES } from 'utils/constants';
import CryptoMarketCapList from './CryptoMarketCapList';
import PaginationButtons from './PaginationButtons';

const headerStyle = css`
  margin: 0;
  font-size: 2.6rem;
  letter-spacing: -0.3px;
`;

const tableMarginStyle = css`
  margin-bottom: 3.2rem;

  @media (max-width: 1199px) {
    margin-bottom: 3.6rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 3.1rem;
  }
`;

const CryptoMarketCap = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    status, data, error, isPreviousData,
  } = useCoinsMarketsJeris(currentPage);

  const [cryptoList, setCryptoList] = useState([]);
  const [order, setOrder] = useState('marketCapRank');

  const sortedCryptoList = cryptoList.sort((a, b) => {
    let orderVal = order;
    let isAscending = false;

    if (orderVal.endsWith('Ascend')) {
      orderVal = orderVal.slice(0, -'Ascend'.length);
      isAscending = true;
    }

    if (orderVal.endsWith('Rank')) {
      orderVal = orderVal.slice(0, -'Rank'.length);
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
      if (order === 'marketCapRank') {
        setOrder('marketCapRankAscend');
      } else {
        setOrder('marketCapRank');
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

  const handleLoad = useCallback(() => {
    if (data) {
      const parsedData = parseMarketCapData(data);
      setCryptoList(parsedData);
    }
  }, [data]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  useEffect(() => {
    if (!isPreviousData && currentPage < 101) {
      queryClient.prefetchQuery({
        queryKey: ['coinsMarkets', currentPage + 1],
        queryFn: () => { return getCoinsMarkets(currentPage + 1); },
      });
    }
  }, [isPreviousData, currentPage, queryClient]);

  const handlecurrentPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainContainer>
      <div key="headerContent">
        <h2 css={headerStyle}>전체 암호화폐 시세</h2>
      </div>
      <div key="bodyContent">
        <div css={tableMarginStyle}>
          {status === 'loading' ? (
            <div>Loading...</div>
          ) : status === 'error' ? (
            <div>
              {`Error: ${error.message}`}
            </div>
          ) : (
            <CryptoMarketCapList
              cryptoList={sortedCryptoList}
              clickHandlers={clickHandlers}
              order={order}
            />
          )}
        </div>
        <PaginationButtons
          totalPages={TOTAL_PAGES}
          currentPage={currentPage}
          onPageChange={handlecurrentPageChange}
        />
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCap;
