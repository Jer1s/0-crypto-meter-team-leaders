import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --primary: #00a661;
    --primary-red: #FD493D;
    --primary-blue: #4c32ed;
    --black: #0b0e1b;
    --gray1: #161c2f;
    --gray2: #262a38;
    --gray3: #474b58;
    --gray4: #616575;
    --gray5: #848898;
    --gray6: #A2A7B7;
    --gray7: #CED2DD;
    --gray8: #E7E9F0;
    --gray9: #F5F8F9;
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
