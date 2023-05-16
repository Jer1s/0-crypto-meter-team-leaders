import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** @jsxImportSource @emotion/react */
import dropDownTriangleIcon from 'assets/drop-down-triangle-icon.svg';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
      />
      <p>
        <img src={dropDownTriangleIcon} alt="Drop Down Triangle Icon" />
      </p>
    </div>
  );
};

export default DateInput;
