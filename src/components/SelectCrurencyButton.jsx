/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import { navButtonStyle } from 'styles/emotionStyles';

const buttonStyle = css`
  gap: 1.6rem;
  padding-right: 1rem;
`;

const imgStyle = css`
  width: 1rem;
  height: 0.6rem;
`;

const SearchHistoryButton = () => {
  return (
    <button type="button" css={[navButtonStyle, buttonStyle]}>
      원(₩)
      <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />
    </button>
  );
};

export default SearchHistoryButton;
