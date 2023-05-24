/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { useRecoilValue } from 'recoil';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';

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

const zeroStyle = css`
  color: var(--gray5);
`;

const currentDateStyle = css`
  color: var(--gray4);
  margin: 0;
`;

const today = new Date();

const CoinScenarioResult = () => {
  const scenarioData = useRecoilValue(scenarioDataAtom);
  const { date, price } = scenarioData.input;
  const { outputPrice, isSkyrocketed, outputDate } = scenarioData.output;
  const func = useFormattedPrice();

  return (
    <>
      <p css={ScenarioDescriptionStyle}>
        {`${date.year}년 ${date.month}월 ${date.day}일에 ${func(price)}으로 샀다면 오늘`}
      </p>
      <p css={resultStyle}>
        <span css={[currentPriceStyle({ isSkyrocketed }), (outputPrice === 0) && zeroStyle]}>
          {func(outputPrice)}
        </span>
        입니다.
      </p>
      <p css={currentDateStyle}>{`(${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours() >= 12 ? '오후' : '오전'} ${today.getHours() >= 12 ? today.getHours() - 12 : today.getHours()}시 기준)`}</p>
    </>
  );
};

export default CoinScenarioResult;
