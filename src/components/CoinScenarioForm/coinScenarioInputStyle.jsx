import { css } from '@emotion/react';

export const coinScenarioInputStyle = css`
  position : relative;
  max-width : 36.5rem;

  & .inputBox{
  padding: 2.6rem 2rem 2.6rem 2.5rem;
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
`;
