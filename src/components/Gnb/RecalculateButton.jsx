/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import restore from 'assets/restore.svg';
import { useResetRecoilState } from 'recoil';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import { navButtonStyle } from './navButtonStyle';

const buttonStyle = css`
  gap: 0.6rem;
  padding-left: 1rem;
  height: 4rem;
  @media (max-width: 767px) {
    padding: 1.2rem 1.6rem;
    height: 4.2rem;
  }
`;

const imgStyle = css`
  width: 2rem;
  height: 2rem;

  @media (max-width: 767px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const textStyle = css`
  @media (max-width: 767px) {
    display: none;
  }
`;

const RecalculateButton = () => {
  const resetScenarioData = useResetRecoilState(scenarioDataAtom);

  return (
    <button type="button" onClick={resetScenarioData} css={[navButtonStyle, buttonStyle]}>
      <img css={imgStyle} src={restore} alt="Restore" />
      <div css={textStyle}>다시 계산하기</div>
    </button>
  );
};

export default RecalculateButton;
