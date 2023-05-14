import { css } from '@emotion/react';

export const navButtonStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 15px;
  height: 4rem;
  border: 0.1rem solid var(--gray7);
  border-radius: 1.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--gray2);

  @media (max-width: 767px) {}
`;
