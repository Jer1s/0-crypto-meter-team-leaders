import React, { useState, useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import dropDownTriangleIcon from 'assets/drop-down-triangle-icon.svg';
import useFetch from 'hooks/useFetch';
import PropTypes from 'prop-types';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const dropDownBoxStyle = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  img {
    width : 3rem;
    height: 3rem;
  }
`;

const selectedCoinStyle = css`

`;

const CoinTypeDropDown = ({ selectedCoin, onCoinSelect }) => {
  // 추후 mockdata에서 실제 api 요청으로 변경
  // const page = 1;
  // const { data, loading, error } = useFetch(`/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
  const { data, loading, error } = useFetch('src/components/CoinScenarioForm/coinDropDownMockData.json');
  // console.log(data);

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
    <div css={coinScenarioInputStyle}>
      <div
        role="presentation"
        className="inputBox"
        css={dropDownBoxStyle}
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        {selectedCoin ? (
          <div css={selectedCoinStyle}>
            <img src={selectedCoin.image} alt={selectedCoin.name} />
            {selectedCoin.name}
          </div>
        ) : (<div />
        )}
        <div>
          {isOpen && (
          <ul>
            {data
                  && data.map((item) => {
                    return (
                      <li
                        role="presentation"
                        key={item.id}
                        value={item.id}
                        onClick={() => { return handleSelectCoin(item); }}
                      >

                        <img src={item.image} alt={item.name} />
                        {item.name}
                      </li>
                    );
                  })}
          </ul>
          )}
        </div>

      </div>
      <p>
        <img src={dropDownTriangleIcon} alt="Drop Down Triangle Icon" />
      </p>
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
