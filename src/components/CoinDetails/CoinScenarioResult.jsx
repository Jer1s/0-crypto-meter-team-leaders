/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import scenarioInputAtom from 'recoils/scenarioData/scenarioInputAtom';

const ScenarioDescriptionStyle = css`
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  line-height: 2.4rem;
  font-weight: 600;
  font-size: 1.8rem;
`;

const resultStyle = css`
  font-weight: 700;
  font-size: 4.8rem;
  margin: 0 0 0.9rem;
`;

const currentPriceStyle = ({ localeCurrency }) => {
  return css`
    display: inline-block;
    margin-right: 1rem;
    color: ${localeCurrency === 'krw'
    ? 'var(--primary)'
    : 'var(--primary-red)'};
  `;
};

const currentDateStyle = css`
  color: var(--gray4);
  margin: 0;
`;

const CoinScenarioResult = () => {
  const scenarioData = useRecoilValue(scenarioInputAtom);
  const localeCurrency = useRecoilValue(localeCurrencyAtom);

  const { price, date } = scenarioData;
  const { year, month, day } = date;

  const getCurrentDate = () => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    return `${todayYear}년 ${todayMonth}월 ${todayDay}일`;
  };

  // 천 단위 , 설정
  const priceWithCommas = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <p css={ScenarioDescriptionStyle}>
        {`${year}년 ${month}월 ${day}일에 ${priceWithCommas}원으로 샀다면 오늘`}
      </p>
      <p css={resultStyle}>
        <span css={currentPriceStyle({ localeCurrency })}>31,000.74원</span>
        입니다.
      </p>
      <p css={currentDateStyle}>{`(${getCurrentDate()} 오전 9시 기준)`}</p>
    </>
  );
};

export default CoinScenarioResult;
