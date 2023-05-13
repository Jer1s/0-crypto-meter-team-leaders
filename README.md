# Cryptometer

<div>
  <a href="https://www.npmjs.com/package/npm"><img alt="npm version" src="https://img.shields.io/badge/npm@latest-v9.6.6-CB3837?&logo=npm&logoColor=CB3837"></a>
  <a href="https://www.npmjs.com/package/react"><img alt="React npm version" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=React&logoColor=61DAFB"></a>
  <a href="https://www.npmjs.com/package/vite"><img alt="Vite version" src="https://img.shields.io/badge/Vite-v4.3.5-646CFF?logo=Vite&logoColor=646CFF"></a>
  <a href="https://www.npmjs.com/package/chart.js"><img alt="Chart.js version" src="https://img.shields.io/badge/Chart.js-v4.3.0-FF6384?logo=Chart.js&logoColor=FF6384"></a>
  <a href="https://www.npmjs.com/package/recoil"><img alt="Recoil version" src="https://img.shields.io/badge/Recoil-v0.7.7-0075EB"></a>
  <a href="https://www.npmjs.com/package/@emotion/react"><img alt="@emotion/react version" src="https://img.shields.io/badge/@emotion/react-v11.11.0-DB7093?logoColor=DB7093"></a>
</div>

Cryptometer is a web application being developed to provide a web service that checks the current value of a bitcoin if I had bought it at a specific point in the past.

## Project Structure
```
0-crypto-meter-team-leaders
├─ .eslintrc.cjs
├─ LICENSE.md
├─ README.md
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ logo-mobile.svg
│  └─ logo.svg
├─ src
│  ├─ App.jsx
│  ├─ api
│  │  └─ index.jsx
│  ├─ assets
│  │  ├─ close.png
│  │  ├─ facebook.png
│  │  ├─ filter.png
│  │  ├─ gt.png
│  │  ├─ kakaotalk.png
│  │  ├─ lt.png
│  │  ├─ order-ascending.png
│  │  ├─ order-desending.png
│  │  ├─ order-none.png
│  │  ├─ restore.png
│  │  └─ share.png
│  ├─ components
│  │  └─ index.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  └─ HomePage.jsx
│  ├─ recoils
│  │  ├─ atoms
│  │  │  └─ localeCurrencyAtom.jsx
│  │  └─ selectors
│  ├─ styles
│  │  └─ GlobalStyle.jsx
│  └─ utils
│     └─ index.jsx
└─ vite.config.js

```

- public/: This folder is for storing static files.
- src/: This folder is for storing source code.
- src/api/: This folder is for storing fetch api files.
- src/assets/: This folder is for storing static asset files.
- src/components/: This folder is for storing react components.
- src/pages/: This folder is for storing page components.
- src/recoils/: This folder is for recoil atoms and selectors.
- src/styles/: This folder is for storing style components.
- src/utils/: This folder is for storing utility functions and constants.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
