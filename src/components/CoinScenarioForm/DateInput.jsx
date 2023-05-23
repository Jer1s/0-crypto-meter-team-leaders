import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import useResponsiveView from 'hooks/useResponsiveView';

/** @jsxImportSource @emotion/react */
import whiteInvertedTriangleIcon from 'assets/white-inverted-triangle.svg';
import invertedTriangleIcon from 'assets/inverted-triangle.svg';
import { coinScenarioInputStyle } from './coinScenarioInputStyle';

const DateInput = ({ selectedDate, onSelectedDate }) => {
  const viewportType = useResponsiveView();
  const handleDateChange = (date) => {
    onSelectedDate(date);
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
        <img src={viewportType === 'Desktop' ? whiteInvertedTriangleIcon : invertedTriangleIcon} alt="Drop Down Triangle Icon" />
      </p>
    </div>
  );
};
DateInput.propTypes = {
  onSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
};
export default DateInput;
