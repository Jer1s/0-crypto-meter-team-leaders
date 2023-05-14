import { css } from '@emotion/react';

export const navButtonStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.5rem;
  border: 0.1rem solid var(--gray7);
  border-radius: 1.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--gray2);

  @media (max-width: 767px) {
    padding: 1.2rem 1.4rem;
  }
`;
