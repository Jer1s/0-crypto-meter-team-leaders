/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainContainer from 'components/MainContainer';

const mainContainerStyle = css`
  padding-bottom: 11.4rem;
`;

const headerStyle = css`
  font-size: 2.6rem;
  line-height: 3.1rem;
  letter-spacing: -0.3px;
  color: var(--black);
`;

const CryptoMarketCapList = () => {
  return (
    <MainContainer css={mainContainerStyle}>
      <div css={headerStyle}>
        <h2>전체 암호화폐 시세</h2>
      </div>
      <div>
        <div />
      </div>
    </MainContainer>
  );
};

export default CryptoMarketCapList;
