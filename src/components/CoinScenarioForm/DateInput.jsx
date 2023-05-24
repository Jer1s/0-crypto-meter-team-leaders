import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useResponsiveView from 'hooks/useResponsiveView';
import { useRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import whiteInvertedTriangleIcon from 'assets/white-inverted-triangle.svg';
import invertedTriangleIcon from 'assets/inverted-triangle.svg';
import ko from 'date-fns/locale/ko';
import { selectedDateAtom } from 'recoils/scenarioInputData/scenarioInputDataAtom';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const validationHistoryPriceStyle = css`
  color: var(--primary-red);
  font-size: 1.2rem;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.025rem;
  margin-top: 0.68rem;
  padding: 0.8rem 1.1rem;
  position: absolute;
  top: -4rem;
  z-index: 1;
  text-align: center;
`;

const DateInput = ({ isHistoryPriceValid }) => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const viewportType = useResponsiveView();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div css={coinScenarioInputStyle}>
      {!isHistoryPriceValid && (
        <div css={validationHistoryPriceStyle}>
          당시의 코인 가격을 알 수 없습니다. 날짜를 다시 선택해주세요.
        </div>
      )}
      <DatePicker
        className="inputBox"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="년/월/일"
        dateFormat="yyyy년 MM월 dd일"
        shouldCloseOnSelect
        maxDate={new Date()}
        locale={ko}
      />
      <p>
        <img src={viewportType === 'Desktop' ? whiteInvertedTriangleIcon : invertedTriangleIcon} alt="Drop Down Triangle Icon" />
      </p>
    </div>
  );
};
export default DateInput;
