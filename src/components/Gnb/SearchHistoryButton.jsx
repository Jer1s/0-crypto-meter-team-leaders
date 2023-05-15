/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { navButtonStyle } from './navButtonStyle';

const activeButtonStyle = css`
  background-color: var(--active-button-background);
  color: var(--primary);
  border-color: var(--primary);
`;

const SearchHistoryButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearchHistory = () => {
    setIsActive((prev) => { return !prev; });
  };

  return (
    <button
      type="button"
      css={[navButtonStyle, isActive ? activeButtonStyle : null]}
      onClick={toggleSearchHistory}
    >
      검색 기록
    </button>
  );
};

export default SearchHistoryButton;
