/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';

const mainContainerStyle = css`
  padding-bottom: 11.4rem;
`;

const CryptoMarketCapList = () => {
  return (
    <MainContainer css={mainContainerStyle}>
      <header>
        <h2>전체 암호화폐 시세</h2>
      </header>
      <div>
        <div />
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCapList;
