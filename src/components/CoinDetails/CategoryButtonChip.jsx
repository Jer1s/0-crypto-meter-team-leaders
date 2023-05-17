/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const chipStyle = ({ text, selectedTerm }) => {
  return css`
    width: 4.4rem;
    height: 2.6rem;
    border-radius: 2.1rem;
    font-size: 1.4rem;
    color: ${selectedTerm.text === text ? 'var(--white)' : 'var(--gray5)'};
    background: ${selectedTerm.text === text ? 'var(--black)' : 'var(--gray8)'};
    text-align: center;
    border: none;
    cursor: pointer;
    margin-top: 2.8rem;
    margin-bottom: 3.45rem;
    margin-right: 0.8rem;

    &:last-child {
      margin: 0;
    }
  `;
};

const CategoryButtonChip = ({ termItem, selectedTerm, setSelectedTerm }) => {
  const { text } = termItem;

  const handleClick = () => {
    setSelectedTerm(termItem);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      css={chipStyle({ text, selectedTerm })}
    >
      {text}
    </button>
  );
};

CategoryButtonChip.propTypes = {
  selectedTerm: PropTypes.shape({
    text: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedTerm: PropTypes.func.isRequired,
  termItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
};

export default CategoryButtonChip;
