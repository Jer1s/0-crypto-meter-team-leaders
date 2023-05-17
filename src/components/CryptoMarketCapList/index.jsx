/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';

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

const CryptoMarketCapList = () => {
  return (
    <MainContainer css={mainContainerStyle}>
      <div key="headerContent">
        <h2 css={headerStyle}>전체 암호화폐 시세</h2>
      </div>
      <div key="bodyContent">
        <div css={bodyStyle}>temp</div>
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCapList;
