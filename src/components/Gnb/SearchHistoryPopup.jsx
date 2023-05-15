/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  position: absolute;
  top: 7.2rem;
  width: 52rem;
  max-height: 59rem;
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);
`;

const SearchHistoryPopup = () => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  return (
    <div css={[navButtonStyle, popupStyle]}>
      {searchHistory.map((item) => {
        return (
          <div key={item.id}>
            <span>
              {item.date.year}
              -
              {item.date.month}
              -
              {item.date.day}
            </span>
            <span>
              {item.price}
            </span>
            <span>
              {item.coinType}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistoryPopup;
