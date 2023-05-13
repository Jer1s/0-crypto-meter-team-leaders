import React from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --primary: #00a661;
    --primary-red: #fd493d;
    --primary-blue: #4c32ed;
    --black: #0b0e1b;
    --gray1: #161c2f;
    --gray2: #262a38;
    --gray3: #474b58;
    --gray4: #616575;
    --gray5: #848898;
    --gray6: #a2a7b7;
    --gray7: #ced2dd;
    --gray8: #e7e9f0;
    --gray9: #f5f8f9;
    --background: #f5f8f9;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background-color: var(--background);
    font-family: 'Pretendard', sans-serif;
    font-size: 1.6rem;
  }

  input,
  button {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
