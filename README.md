# Cryptometer

<div>
  <a href="https://www.npmjs.com/package/npm"><img alt="npm version" src="https://img.shields.io/badge/npm@latest-v9.6.6-CB3837?&logo=npm&logoColor=CB3837"></a>
  <a href="https://www.npmjs.com/package/react"><img alt="React npm version" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=React&logoColor=61DAFB"></a>
  <a href="https://www.npmjs.com/package/vite"><img alt="Vite version" src="https://img.shields.io/badge/Vite-v4.3.5-646CFF?logo=Vite&logoColor=646CFF"></a>
  <a href="https://www.npmjs.com/package/@tanstack/react-query"><img alt="React Query version" src="https://img.shields.io/badge/ReactQuery-v4.29.7-FF4154"></a> <a href="https://www.npmjs.com/package/recoil"><img alt="Recoil version" src="https://img.shields.io/badge/Recoil-v0.7.7-0075EB"></a>
  <a href="https://www.npmjs.com/package/@emotion/react"><img alt="@emotion/react version" src="https://img.shields.io/badge/@emotion/react-v11.11.0-DB7093?logoColor=DB7093"></a>
</div>

Cryptometer is a web application being developed to provide a web service that checks the current value of a bitcoin if I had bought it at a specific point in the past.

## Deploy Link

The application can be accessed at [https://cryptometer.netlify.app/](https://cryptometer.netlify.app/).

## Project Structure
```
0-crypto-meter-team-leaders
├─ .eslintrc.cjs
├─ LICENSE.md
├─ README.md
├─ cryptoMockData.json
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ logo.svg
├─ src
│  ├─ App.jsx
│  ├─ api
│  │  └─ mockDataAPI.jsx
│  ├─ assets /
│  ├─ components
│  │  ├─ CoinDetails
│  │  │  ├─ CategoryButtonChip.jsx
│  │  │  ├─ CategoryButtonChipContainer.jsx
│  │  │  ├─ CoinChart.jsx
│  │  │  ├─ CoinChart.module.css
│  │  │  ├─ CoinScenarioResult.jsx
│  │  │  ├─ KakaoShareButton.jsx
│  │  │  ├─ TermList
│  │  │  │  ├─ bitcoin.js
│  │  │  │  ├─ dayCoinList.json
│  │  │  │  ├─ maxCoinList.js
│  │  │  │  ├─ monthCoinList.js
│  │  │  │  ├─ weekCoinList.js
│  │  │  │  └─ yearCoinList.js
│  │  │  ├─ index.jsx
│  │  │  └─ mock.js
│  │  ├─ CoinScenarioForm
│  │  │  ├─ AddPriceButton.jsx
│  │  │  ├─ BuyPriceInput.jsx
│  │  │  ├─ CoinTypeDropDown.jsx
│  │  │  ├─ DateInput.jsx
│  │  │  ├─ ScenarioDescription.jsx
│  │  │  ├─ coinDropDownMockData.json
│  │  │  ├─ coinScenarioInputStyle.jsx
│  │  │  └─ index.jsx
│  │  ├─ CryptoMarketCap
│  │  │  ├─ CryptoMarketCapList.jsx
│  │  │  ├─ PriceChangeChip.jsx
│  │  │  └─ index.jsx
│  │  ├─ GlobalStyle.jsx
│  │  ├─ Gnb
│  │  │  ├─ RecalculateButton.jsx
│  │  │  ├─ SearchHistoryButton.jsx
│  │  │  ├─ SearchHistoryPopup.jsx
│  │  │  ├─ SelectCurrencyButton.jsx
│  │  │  ├─ SelectCurrencyPopup.jsx
│  │  │  ├─ index.jsx
│  │  │  └─ navButtonStyle.jsx
│  │  ├─ HomePageLayout.jsx
│  │  └─ MainContainer.jsx
│  ├─ hooks
│  │  ├─ useAtomStorageSync.jsx
│  │  ├─ useFetch.jsx
│  │  ├─ useFormattedPrice.jsx
│  │  ├─ useKakaoShare.jsx
│  │  └─ useResponsiveView.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  └─ HomePage.jsx
│  ├─ recoils
│  │  ├─ localeCurrency
│  │  │  ├─ localeCurrencyAtom.jsx
│  │  │  └─ localeCurrencySelector.jsx
│  │  ├─ scenarioData
│  │  │  └─ scenarioDataAtom.jsx
│  │  └─ searchHistory
│  │     └─ searchHistoryAtom.jsx
│  └─ utils
│     ├─ constants.jsx
│     ├─ currencyConverter.jsx
│     ├─ getCurrentDate.jsx
│     └─ parseMarketCapData.jsx
└─ vite.config.js

```

- public/: This folder is for storing static files.
- src/: This folder is for storing source code.
- src/api/: This folder is for storing fetch api files.
- src/assets/: This folder is for storing static asset files.
- src/components/: This folder is for storing react components including style components.
- src/pages/: This folder is for storing custom hook components.
- src/pages/: This folder is for storing page components.
- src/recoils/: This folder is for recoil atoms and selectors.
- src/utils/: This folder is for storing utility functions and constants.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
