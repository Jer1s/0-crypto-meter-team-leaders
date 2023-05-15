/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css``;

const SearchHistoryPopup = () => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  return (
    <div css={[navButtonStyle, popupStyle]}>
      {searchHistory}
    </div>
  );
};

export default SearchHistoryPopup;
