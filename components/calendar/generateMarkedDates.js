const generateMarkedDates = (loginDates) => {
  let res = {};
  loginDates.forEach((date) => {
    const dateString = '2022-03-' + date;
    const setValue = { selected: true, marked: true, selectedColor: 'blue' };
    res[dateString] = setValue;
  });

  return res;
};

export default generateMarkedDates;
