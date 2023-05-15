/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';
import useFormattedPrice from 'hooks/useFormattedPrice';
import { navButtonStyle } from './navButtonStyle';

const popupStyle = css`
  position: absolute;
  top: 7.2rem;
  right: 6rem;
  width: 52rem;
  max-height: 59rem;
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.4rem;
  background-color: var(--gray9);

  @media (min-width: 768px) and (max-width: 1199px) {
    right: 2.4rem;
  }
  
  @media (max-width: 767px) {
    top: 6rem;
    right: 2rem;
  }
`;

const historyItemStyle = css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.6rem;
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 0.8rem;
  line-height: 1.8rem;
`;

const firstLineStyle = css`
  color: var(--gray5);
  line-height: 1.8rem;
`;

const secondLineStyle = css`
  color: var(--black);
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const SearchHistoryPopup = () => {
  const searchHistory = useRecoilValue(searchHistoryAtom);
  const formatPrice = useFormattedPrice();

  return (
    <div css={[navButtonStyle, popupStyle]}>
      {searchHistory.map((item) => {
        const {
          year, month, day,
        } = item.date;
        const price = formatPrice(item.price);
        return (
          <div key={item.id} css={historyItemStyle}>
            <div css={firstLineStyle}>
              {`만약 ${year}년 ${month}월 ${day}일에 ${price}으로`}
            </div>
            <div css={secondLineStyle}>
              {`${item.coinType}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistoryPopup;
