/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import { getCryptoMockData } from 'api/mockDataAPI';
import parseMarketCapData from 'utils/parseMarketCapData';
import { useRecoilValue } from 'recoil';
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
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const [order, setOrder] = useState('');
  const [cryptoList, setCryptoList] = useState([]);

  const sortedCryptoList = cryptoList.sort((a, b) => {
    const valueA = a[order];
    const valueB = b[order];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueB - valueA; // 숫자 비교
    }

    const nameA = String(valueA).toUpperCase(); // 문자열 비교
    const nameB = String(valueB).toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const clickHandlers = {
    marketCapRankSort: () => {
      setOrder('');
    },
    nameSort: () => {
      setOrder('name');
    },
    currentPriceSort: () => {
      setOrder('currentPrice');
    },
    marketCapSort: () => {
      setOrder('marketCap');
    },
    pc1hSort: () => {
      setOrder('pc1h');
    },
    pc24hSort: () => {
      setOrder('pc24h');
    },
    pc7dSort: () => {
      setOrder('pc7d');
    },
  };

  const handleLoad = async () => {
    const result = await getCryptoMockData();
    setCryptoList(parseMarketCapData(result));
  };

  useEffect(() => {
    handleLoad();
  }, [order, localeCurrency]);

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
