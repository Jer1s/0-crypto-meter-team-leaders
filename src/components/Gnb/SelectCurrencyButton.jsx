/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import invertedTriangle from 'assets/inverted-triangle.svg';
import Triangle from 'assets/triangle.svg';
import localeCurrencySelector from 'recoils/localeCurrency/localeCurrencySelector';
import { useRecoilValue } from 'recoil';
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

const SelectCurrencyButton = () => {
  const { currencyUnit, currencySign } = useRecoilValue(localeCurrencySelector);

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
        onClick={toggleShowPopup}
        css={[navButtonStyle, buttonStyle]}
      >
        <div css={textStyle}>{`${currencyUnit} (${currencySign})`}</div>
        <div css={mobileTextStyle}>{currencySign}</div>
        {showPopup ? <img css={imgStyle} src={Triangle} alt="Triangle" /> : <img css={imgStyle} src={invertedTriangle} alt="Inverted Triangle" />}
      </button>
      {showPopup && (<SelectCurrencyPopup setShowPopup={setShowPopup} />)}
    </div>
  );
};

export default SelectCurrencyButton;
