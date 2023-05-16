/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { navButtonStyle } from './navButtonStyle';
import SearchHistoryPopup from './SearchHistoryPopup';

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

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
    <div css={containerStyle}>
      <button
        type="button"
        css={[navButtonStyle, isActive ? activeButtonStyle : null]}
        onClick={toggleSearchHistory}
      >
        검색 기록
      </button>
      {isActive && (<SearchHistoryPopup setIsActive={setIsActive} />)}
    </div>
  );
};

export default SearchHistoryButton;
