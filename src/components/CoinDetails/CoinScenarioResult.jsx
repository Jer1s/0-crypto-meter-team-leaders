/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { useRecoilValue } from 'recoil';
import scenarioOutputAtom from 'recoils/scenarioData/scenarioOutputAtom';

const ScenarioDescriptionStyle = css`
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  line-height: 2.4rem;
  font-weight: 600;
  font-size: 1.8rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const resultStyle = css`
  font-weight: 700;
  font-size: 4.8rem;
  margin: 0 0 0.9rem;

  @media (max-width: 767px) {
    font-size: 3.2rem;
  }
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
  const data = useRecoilValue(scenarioOutputAtom);
  const { userInputData, calculatedData } = data;
  const { date, price } = userInputData;
  const { calculatedPrice, isSkyrocketed, calculatedDate } = calculatedData;
  const func = useFormattedPrice(calculatedPrice);

  return (
    <>
      <p css={ScenarioDescriptionStyle}>
        {`${date.year}년 ${date.month}월 ${date.day}일에 ${func(price)}으로 샀다면 오늘`}
      </p>
      <p css={resultStyle}>
        <span css={currentPriceStyle({ isSkyrocketed })}>
          {func(calculatedPrice)}
        </span>
        입니다.
      </p>
      <p css={currentDateStyle}>{`(${calculatedDate.year}년 ${calculatedDate.month}월 ${calculatedDate.day}일 오전 ${calculatedDate.hour}시 기준)`}</p>
    </>
  );
};

export default CoinScenarioResult;
