/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.png';
import Triangle from 'assets/triangle.png';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import { navButtonStyle } from './navButtonStyle';
import SelectCurrencyPopup from './SelectCurrencyPopup';

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  width: 9rem;
  padding: 1.1rem 1rem 1.1rem 1.5rem;

  @media (max-width: 767px) {
    width: 5.9rem;
    padding: 1.2rem 1.2rem 1.2rem 1.6rem;
  }
`;

const imgStyle = css`
  width: 1rem;

  @media (max-width: 767px) {
    width: 0.8rem;
  }
`;

const textStyle = css`
  line-height: 1.8rem;
  letter-spacing: -0.3px;

  @media (max-width: 767px) {
    display: none
  }
`;

const mobileTextStyle = css`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const SelectCurrencyButton = ({ activeButton, setActiveButton }) => {
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

  const toggleCurrencySelector = () => {
    if (activeButton === 'selectCurrency') {
      setActiveButton('');
    } else {
      setActiveButton('selectCurrency');
    }
  };

  return (
    <div css={containerStyle}>
      <button
        type="button"
        onClick={toggleCurrencySelector}
        css={[navButtonStyle, buttonStyle]}
      >
        <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
        <div css={mobileTextStyle}>{currencySign}</div>
        {(activeButton === 'selectCurrency') ? <img css={imgStyle} src={Triangle} alt="Triangle" /> : <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />}
      </button>
      {(activeButton === 'selectCurrency') && (<SelectCurrencyPopup />)}
    </div>
  );
};

SelectCurrencyButton.propTypes = {
  activeButton: PropTypes.string.isRequired,
  setActiveButton: PropTypes.func.isRequired,
};

export default SelectCurrencyButton;
