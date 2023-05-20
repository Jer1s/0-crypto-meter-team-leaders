/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const coinScenarioInputStyle = css`
  position : relative;
  max-width : 36.5rem;

  & .inputBox{
  padding: 0 2.5rem;
  width: 100%;
  height: 7.4rem;
  border: 0.1rem solid var(--gray4);
  border-radius: 1.2rem;
  background-color: var(--gray1);


  color: var(--white);
  &::placeholder {
      color: var(--gray4);
    }
  }

  & p {
    color: var(--white);
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    margin:0;

  }
  @media (max-width: 1199px){
    max-width : 100%;
    & .inputBox{
      background-color: initial;
    }
  }

  @media (max-width: 768px){
    & .inputBox{
      height: 6.3rem;
    }
  }
`;
