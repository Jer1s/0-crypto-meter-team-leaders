/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
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
  const [showPopup, setShowPopup] = useState(false);
  const node = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (showPopup && node.current && !node.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [showPopup]);

  const toggleShowPopup = () => {
    setShowPopup((prev) => { return !prev; });
  };

  return (
    <div ref={node} css={containerStyle}>
      <button
        type="button"
        css={[navButtonStyle, showPopup && activeButtonStyle]}
        onClick={toggleShowPopup}
      >
        검색 기록
      </button>
      {showPopup && (<SearchHistoryPopup setShowPopup={setShowPopup} />)}
    </div>
  );
};

export default SearchHistoryButton;
