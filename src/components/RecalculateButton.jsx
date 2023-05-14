/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import restore from 'assets/restore.png';
import { navButtonStyle } from 'styles/emotionStyles';

const buttonStyle = css`
  gap: 0.6rem;
  padding-left: 1rem;
  @media (max-width: 767px) {
    padding: 1.2rem 1.6rem;
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

const spanStyle = css`
  @media (max-width: 767px) {
    display: none;
  }
`;

const RecalculateButton = () => {
  return (
    <button type="button" css={[navButtonStyle, buttonStyle]}>
      <img css={imgStyle} src={restore} alt="Restore" />
      <span css={spanStyle}>다시 계산하기</span>
    </button>
  );
};

export default RecalculateButton;
