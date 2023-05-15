import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const datePickerStyle = css`
    color: ${selectedDate ? 'var(--white)' : 'var(--gray4)'};
`;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      css={[coinScenarioInputStyle, datePickerStyle]}
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="년/월/일"
      dateFormat="yyyy년 MM월 dd일"
      shouldCloseOnSelect
    />
  );
};

export default DateInput;
