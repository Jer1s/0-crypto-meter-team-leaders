import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import whiteInvertedTriangleIcon from 'assets/white-inverted-triangle.svg';
import invertedTriangleIcon from 'assets/inverted-triangle.svg';
// import useFetch from 'hooks/useFetch';
import PropTypes from 'prop-types';
import useResponsiveView from 'hooks/useResponsiveView';
import { useInfiniteQuery } from '@tanstack/react-query';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const PRO_BASE_URL = import.meta.env.VITE_PRO_BASE_URL;
const PRO_API_KEY = import.meta.env.VITE_X_CG_PRO_API_KEY;

const dropDownBoxStyle = css`
  position: relative;
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    text-align: initial;
    color: var(--white);

    display: flex;
    font-size: 1.7rem;
    align-items: center;
    gap: 1rem;
  }

  .coin-icon {
    width: 3rem;
    height: 3rem;
  }
`;

const dropDownHeaderStyle = css`
  order: 2;
  z-index: 1;
`;

const dropDownListContainerStyle = css`
  order: 3;
  @media (max-width: 1199px) {
    order: 1;
    position: relative;
  }
`;

const dropDownListStyle = css`
  position: absolute;
  margin: 0;
  width: 100%;
  max-height: 22.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: var(--gray2);
  box-shadow: 0 0 0.4rem var(--gray1);

  -ms-overflow-style: none; /* 익스플로러, 앳지 */
  scrollbar-width: none; /* 파이어폭스 */

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1199px) {
    order: 1;
    z-index: 3;
    box-shadow: -0.1rem -0.1rem 0.4rem var(--black);
    bottom: -3.7rem;
  }
`;

const dropDownItemStyle = css`
  width: 34.5rem;
  height: 4.6rem;
  list-style-type: none;

  :hover {
    background-color: var(--black);
    border-radius: 1.2rem;
  }
`;

const fetchItems = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `${PRO_BASE_URL}/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=10&page=${pageParam}&sparkline=false&locale=en`,
    {
      headers: {
        'x-cg-pro-api-key': PRO_API_KEY,
      },
    },
  );
  return response.json();
};

const CoinTypeDropDown = ({ selectedCoin, onCoinSelect }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['coinsMarkets'], fetchItems, {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    // cacheTime: 5 * 60 * 1000,
    // staleTime: 1 * 60 * 1000,
    // retry: 1,
  });

  const viewportType = useResponsiveView();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const lastItemRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCoin = (coin) => {
    onCoinSelect(coin);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    onCoinSelect(data.pages[0][0]);
  }, [data, onCoinSelect]);

  const handleIntersection = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [isOpen, fetchNextPage,
    hasNextPage, isFetchingNextPage, handleIntersection]);

  return (
    <div ref={dropdownRef} css={css`display:flex; flex-direction: column; gap: 0.4rem;`}>
      <div css={[coinScenarioInputStyle, dropDownBoxStyle, dropDownHeaderStyle]}>
        <p>
          <img src={viewportType === 'Desktop' ? whiteInvertedTriangleIcon : invertedTriangleIcon} alt="Drop Down Triangle Icon" />
        </p>
        <button
          type="button"
          className="inputBox"
          onClick={toggleDropdown}
        >
          {selectedCoin && (
            <>
              <img src={selectedCoin.image} alt={selectedCoin.name} className="coin-icon" />
              {selectedCoin.name}
            </>
          )}
        </button>
      </div>
      <div css={[dropDownBoxStyle, dropDownListContainerStyle]}>
        {isOpen && (
          <ul css={dropDownListStyle}>
            {data.pages
              && data.pages.map((page, pageIndex) => {
                return page.map((coins, coinIndex) => {
                  const isLastItem = pageIndex === data.pages.length - 1
                    && coinIndex === page.length - 1;
                  return (
                    <li
                      key={coins.id}
                      ref={isLastItem ? lastItemRef : null}
                    >
                      <button
                        type="button"
                        css={dropDownItemStyle}
                        onClick={() => {
                          return handleSelectCoin(coins);
                        }}
                      >
                        <img
                          src={coins.image}
                          alt={coins.name}
                          className="coin-icon"
                        />
                        {/* {coins.name} */}
                        {coinIndex}
                      </button>
                    </li>
                  );
                });
              })}
          </ul>
        )}
      </div>
    </div>
  );
};

CoinTypeDropDown.propTypes = {
  selectedCoin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onCoinSelect: PropTypes.func.isRequired,
};

export default CoinTypeDropDown;
