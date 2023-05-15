import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DateInput from './DateInput';

const containerStyle = css`
  max-width : 44.5rem;
  width: 100%;
  height: 94.5rem;
  background-color: var(--gray1);
  border-radius: 2.4rem;
`;

const CoinScenarioForm = () => {
  return (
    <div css={containerStyle}>
      <form>
        <DateInput />
      </form>
    </div>
  );
};

export default CoinScenarioForm;
