import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --primary: #00A661;
    --primary-light: #DAF1E5;
    --primary-red: #FD493D;
    --primary-red-light: #F8EAE7;
    --primary-blue: #4C32ED;
    --black: #0B0E1B;
    --gray1: #161C2F;
    --gray2: #262A38;
    --gray3: #474B58;
    --gray4: #616575;
    --gray5: #848898;
    --gray6: #A2A7B7;
    --gray7: #CED2DD;
    --gray8: #E7E9F0;
    --gray9: #F5F8F9;
    --gray10: #D9D9D9;
    --white: #FFFFFF;
    --background: #F5F8F9;
    --active-button-background: #DAF1E5;
    --chart-green: #B9E7D0;
    --tooltip-background: rgba(29, 29, 29, 0.9);
    --market-cap-list-box-shadow: rgba(11, 14, 27, 0.08);
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
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
    font-size: 1.6rem;
    color: var(--black);

    @media (max-width: 1199px) {
      background-color: var(--white);
    }
  }

  input,
  button {
    font-family: inherit;
    font-size: inherit;
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
