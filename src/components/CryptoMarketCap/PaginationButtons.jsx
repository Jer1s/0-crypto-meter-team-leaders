/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import lt from 'assets/lt.svg'
import gt from 'assets/gt.svg'

const containerStyle = css`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: 0.3rem;
  color: var(--gray2);

  button {
    cursor: pointer;
    border: none;
    padding: 0.2 0.75rem;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }

    @media (max-width: 1199px) {
    margin-bottom: 10rem;
  }
  }
`;

const currentPageStyle = css`
  background-color: var(--primary);
  border-radius: 0.4rem;
  color: var(--white);
`;

const PaginationButtons = ({ totalPages, currentPage, onPageChange }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handleClick = (page) => {
    onPageChange(page);
  }

  const renderButtons = () => {
    const buttons = [];
  
    // 첫 번째 페이지(1) 버튼
    buttons.push(
      <button key={1} css={currentPage === 1 && currentPageStyle} onClick={() => handleClick(1)} disabled={currentPage === 1}>
        1
      </button>
    );
  
    // 현재 페이지 주변의 페이지 버튼
    const prevButtons = range(Math.max(2, currentPage - 5), Math.min(currentPage - 1, totalPages - 1));
    const nextButtons = range(Math.max(currentPage + 1, 2), Math.min(currentPage + 5, totalPages - 1));
  
    if (prevButtons.length > 0 && prevButtons[0] !== 2) {
      buttons.push(<span key="ellipsis-prev">...</span>);
    }
  
    prevButtons.forEach((page) => {
      buttons.push(
        <button key={page} onClick={() => handleClick(page)}>
          {page}
        </button>
      );
    });
  
    if (currentPage !== 1 && currentPage !== totalPages) {
      buttons.push(
        <button key={currentPage} css={currentPageStyle} onClick={() => handleClick(currentPage)} disabled>
          {currentPage}
        </button>
      );
    }
  
    nextButtons.forEach((page) => {
      buttons.push(
        <button key={page} onClick={() => handleClick(page)}>
          {page}
        </button>
      );
    });
  
    if (nextButtons.length > 0 && nextButtons[nextButtons.length - 1] !== totalPages - 1) {
      buttons.push(<span key="ellipsis-next">...</span>);
    }
  
    // 마지막 페이지 버튼
    buttons.push(
      <button key={totalPages} css={currentPage === totalPages && currentPageStyle} onClick={() => handleClick(totalPages)} disabled={currentPage === totalPages}>
        {totalPages}
      </button>
    );
  
    return buttons;
  };

  return (
    <div css={containerStyle}>
      <button onClick={() => handleClick(Math.max(currentPage - 1, 1))}>
        <img src={lt} alt='Previous Page' />
      </button>
      {renderButtons()}
      <button onClick={() => handleClick(Math.min(currentPage + 1, 100))}>
        <img src={gt} alt='Next Page' />
      </button>
    </div>

  );
};

PaginationButtons.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationButtons;
