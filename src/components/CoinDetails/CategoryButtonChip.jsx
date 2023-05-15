/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CategoryButtonChip = ({ text }) => {
  const chiyStye = css`
    width: 4.4rem;
    height: 2.6rem;
    border-radius: 2.1rem;
    font-size: 1.4rem;
    color: var(--gray5);
    background: var(--gray8);
    text-align: center;
    border: none;
    cursor: pointer;

    &:active {
      color: var(--white);
      background: var(--black);
    }
  `;

  return (
    <button type="button" css={chiyStye}>
      {text}
    </button>
  );
};

export default CategoryButtonChip;
