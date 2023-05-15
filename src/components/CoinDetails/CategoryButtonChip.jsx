/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const chiyStye = ({ text, selectedCoinHistory }) => {
  return css`
    width: 4.4rem;
    height: 2.6rem;
    border-radius: 2.1rem;
    font-size: 1.4rem;
    color: ${selectedCoinHistory === text ? 'var(--white)' : 'var(--gray5)'};
    background: ${selectedCoinHistory === text
      ? 'var(--black)'
      : 'var(--gray8)'};
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.8rem;

    &:last-child {
      margin: 0;
    }
  `;
};

const CategoryButtonChip = ({
  text,
  selectedCoinHistory,
  setSelectedCoinHistory,
}) => {
  const handleClick = () => {
    setSelectedCoinHistory(text);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      css={chiyStye({ text, selectedCoinHistory })}
    >
      {text}
    </button>
  );
};

export default CategoryButtonChip;
