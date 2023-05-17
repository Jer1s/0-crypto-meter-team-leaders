/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';
import { getCryptoMockData } from 'api/mockDataAPI';
import { useEffect, useState } from 'react';
import parseMarketCapData from 'utils/parseMarketCapData';
import CryptoMarketCapList from './CryptoMarketCapList';

const mainContainerStyle = css`
  padding-bottom: 11.4rem;
`;

const headerStyle = css`
  width: 100rem; // 임시
  margin: 0;
  font-size: 2.6rem;
  letter-spacing: -0.3px;
`;

const bodyStyle = css`
  margin-top: 1.6rem;
`;

const CryptoMarketCap = () => {
  const [cryptoList, setCryptoList] = useState([]);

  const handleLoad = async () => {
    const result = await getCryptoMockData();
    setCryptoList(parseMarketCapData(result));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <MainContainer css={mainContainerStyle}>
      <div key="headerContent">
        <h2 css={headerStyle}>전체 암호화폐 시세</h2>
      </div>
      <div key="bodyContent">
        <div css={bodyStyle}>
          <CryptoMarketCapList cryptoList={cryptoList} />
        </div>
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCap;
