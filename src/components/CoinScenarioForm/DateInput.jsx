import React from 'react';
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

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const viewportType = useResponsiveView();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div css={coinScenarioInputStyle}>
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
