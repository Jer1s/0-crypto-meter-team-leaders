import React, { useState, useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import whiteInvertedTriangleIcon from 'assets/white-inverted-triangle.svg';
import useFetch from 'hooks/useFetch';
import PropTypes from 'prop-types';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const dropDownBoxStyle = css`
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
    gap : 1rem;
  }

  .coin-icon {
    width : 3rem;
    height: 3rem;
  }
`;

const dropDownListStyle = css`
  width: 36.5rem;
  max-height: 22.5rem; 
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  margin-Top: 0.4rem;
  border-radius: 1.2rem;
  background-color: var(--gray2);
  
  -ms-overflow-style: none; /* 익스플로러, 앳지 */
  scrollbar-width: none; /* 파이어폭스 */

  ::-webkit-scrollbar {
    display: none; 
  }
`;

const dropDownItemStyle = css`
  width:34.5rem;
  height: 4.6rem;
  list-style-type: none;

  :hover{
    background-color: var(--black);
    border-radius: 1.2rem;  
  }
`;

const CoinTypeDropDown = ({ selectedCoin, onCoinSelect }) => {
  const { data } = useFetch('src/components/CoinScenarioForm/coinDropDownMockData.json');

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    onCoinSelect(data[0]);
  }, [data]);

  return (
    <div ref={dropdownRef}>
      <div css={[coinScenarioInputStyle, dropDownBoxStyle]}>
        <p>
          <img src={whiteInvertedTriangleIcon} alt="White Triangle Icon" />
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
          ) }
        </button>
      </div>
      <div css={dropDownBoxStyle}>
        {isOpen && (
          <ul css={dropDownListStyle}>
            {data
                  && data.map((item) => {
                    return (
                      <li
                        key={item.id}
                      >
                        <button type="button" css={dropDownItemStyle} onClick={() => { return handleSelectCoin(item); }}>
                          <img src={item.image} alt={item.name} className="coin-icon" />
                          {item.name}
                        </button>
                      </li>
                    );
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
