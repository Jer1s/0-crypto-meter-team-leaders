/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const coinScenarioInputStyle = css`
  position : relative;

  & .inputBox {
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

  & .react-datepicker {
    width: 30rem;
    height: 35rem;
    border-radius: 1rem;
  }

  & .react-datepicker__header {
    width: 30rem !important;
    font-size: 1.6rem;
    border: none;
    padding: 0;
  }

  & .react-datepicker__day {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: background-color; 
    transition-duration: 2s; 
  }

  & .react-datepicker__day:hover {
    background-color: var(--gray6);
  }

  & .react-datepicker__current-month {
    font-size: 1.6rem;
    background: var(--white);
    padding: 2rem 0 1rem;
    border-radius: 1rem;
    font-weight: 500;
  }

  & .react-datepicker__month {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  & .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    height: 4rem;
  }

  & .react-datepicker__day--keyboard-selected {
    background: transparent;
    border: 1px solid black;
    border-radius: 50%;
  }

  & .react-datepicker__navigation--previous {
    top: 1.5rem;
    left: 1rem;
  }

  & .react-datepicker__navigation--next {
    top: 1.5rem;
    right: 1rem;
  }

  & .react-datepicker__day--selected {
    background: transparent;
    border: 0.1rem solid 'var(--gray5)';
    border-radius: 50%;
    color: var(--black)
  }

  & .react-datepicker__day-names {
    background: var(--white);
    border: none;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(7, 1fr);
    padding-top: 1rem;
    align-items: center;
    justify-items: center;
    height: 5rem;
  }

  & .react-datepicker-popper {
    z-index: 2
  }

  & .react-datepicker__triangle {
    transform: translate3d(3rem, 0.1rem, 0) !important
  }


  @media (max-width: 1199px){
    max-width : 100%;
    & .inputBox{
      background-color: initial;
      color: var(--gray1);
    }

  p {
    color: var(--gray1)
    }
  }

  @media (max-width: 768px){
    & .inputBox{
      height: 6.3rem;
    }
  }
`;
