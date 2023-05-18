/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import scenarioOutputAtom from 'recoils/scenarioData/scenarioOutputAtom';

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

const currentPriceStyle = ({ isSkyrocketed }) => {
  return css`
    display: inline-block;
    margin-right: 1rem;
    color: ${isSkyrocketed ? 'var(--primary)' : 'var(--primary-red)'};
  `;
};

const currentDateStyle = css`
  color: var(--gray4);
  margin: 0;
`;

const CoinScenarioResult = () => {
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const data = useRecoilValue(scenarioOutputAtom);
  const { userInputData, calculatedData } = data;
  const { date, price } = userInputData;
  const { calculatedPrice, isSkyrocketed, calculatedDate } = calculatedData;

  // const getCurrentDate = () => {
  //   const today = new Date();
  //   const todayYear = today.getFullYear();
  //   const todayMonth = today.getMonth() + 1;
  //   const todayDay = today.getDate();

  //   return `${todayYear}년 ${todayMonth}월 ${todayDay}일`;
  // };

  // 천 단위 , 설정
  const priceWithCommas = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <p css={ScenarioDescriptionStyle}>
        {`${date.year}년 ${date.month}월 ${date.day}일에 ${price}원으로 샀다면 오늘`}
      </p>
      <p css={resultStyle}>
        <span css={currentPriceStyle({ isSkyrocketed })}>
          {calculatedPrice}
          원
        </span>
        입니다.
      </p>
      <p css={currentDateStyle}>{`(${calculatedDate.year}년 ${calculatedDate.month}월 ${calculatedDate.day}일 오전 ${calculatedDate.hour}시 기준)`}</p>
    </>
  );
};

export default CoinScenarioResult;
