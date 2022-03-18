const generateMarkedDates = (loginDates) => {
  let res = {};
  loginDates.forEach((date) => {
    const dateString = '2022-03-' + date;
    const color = date == new Date().getDate() ? '#6495ED' : '#7FFFD4';
    const setValue = { selected: true, marked: true, selectedColor: color };
    res[dateString] = setValue;
  });

  return res;
};

export default generateMarkedDates;
