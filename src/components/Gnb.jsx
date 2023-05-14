import styled from '@emotion/styled';
import { css } from '@emotion/react';
import logoImage from 'assets/logo-image.png';
import logoText from 'assets/logo-text.png';
import RecalculateButton from './RecalculateButton';
import SelectCrurencyButton from './SelectCrurencyButton';
import SearchHistoryButton from './SearchHistoryButton';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2.8rem 6rem 3.2rem 5.6rem;
  max-width: 192rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-right: 2.4rem;
    padding-left: 2.8rem;
  }

  @media (max-width: 767px) {
    padding: 1.4rem 2rem 2rem 2.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 18.6rem;

  @media (max-width: 767px) {
    width: 3.5rem
  }
`;

const LogoImage = styled.div`
  width: 3.4rem;
  height: 2.6rem;
  background-image: url(${logoImage});
  background-size: 3.5rem 2.6rem;
  background-repeat: no-repeat;
`;

const LogoText = styled.div` 
  width: 14rem;
  height: 2.15rem;
  background-image: url(${logoText});
  background-size: 14rem 2.15rem;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33rem;

  @media (max-width: 767px) {
    width: 21rem;
  }
`;

const Gnb = () => {
  return (
    <nav css={navStyle}>
      <Logo>
        <LogoImage />
        <LogoText />
      </Logo>
      <ButtonContainer>
        <RecalculateButton />
        <SelectCrurencyButton />
        <SearchHistoryButton />
      </ButtonContainer>
    </nav>
  );
};

export default Gnb;
