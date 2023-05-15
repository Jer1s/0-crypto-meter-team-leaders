const getCurrentDate = () => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  return `${todayYear}년 ${todayMonth}월 ${todayDay}일`;
};

export default getCurrentDate;
