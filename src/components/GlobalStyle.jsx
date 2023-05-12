import React from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --primary: #00a661;
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
    font-family: "Pretendard", sans-serif;
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
