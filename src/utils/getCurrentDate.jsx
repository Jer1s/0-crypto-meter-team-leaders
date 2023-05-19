const getCurrentDate = () => {
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth() + 1;
  const day = currentDateTime.getDate();
  const hour = currentDateTime.getHours();
  return {
    year, month, day, hour,
  };
};

export default getCurrentDate;
