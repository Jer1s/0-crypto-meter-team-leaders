/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
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

const SearchHistoryButton = ({ activeButton, setActiveButton }) => {
  const toggleSearchHistory = () => {
    if (activeButton === 'searchHistory') {
      setActiveButton('');
    } else {
      setActiveButton('searchHistory');
    }
  };

  return (
    <div css={containerStyle}>
      <button
        type="button"
        css={[navButtonStyle, (activeButton === 'searchHistory') ? activeButtonStyle : null]}
        onClick={toggleSearchHistory}
      >
        검색 기록
      </button>
      {(activeButton === 'searchHistory') && (<SearchHistoryPopup setActiveButton={setActiveButton} />)}
    </div>
  );
};

SearchHistoryButton.propTypes = {
  activeButton: PropTypes.string.isRequired,
  setActiveButton: PropTypes.func.isRequired,
};

export default SearchHistoryButton;
