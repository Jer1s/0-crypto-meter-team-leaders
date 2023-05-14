/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import restore from 'assets/restore.png';
import { navButtonStyle } from 'styles/emotionStyles';

const buttonStyle = css`
  gap: 0.6rem;
  padding-left: 1rem;
`;

const imgStyle = css`
  width: 2rem;
  height: 2rem;
`;

const RecalculateButton = () => {
  return (
    <button type="button" css={[navButtonStyle, buttonStyle]}>
      <img css={imgStyle} src={restore} alt="Restore" />
      다시 계산하기
    </button>
  );
};

export default RecalculateButton;
