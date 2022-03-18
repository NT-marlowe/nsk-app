import { useState, useEffect } from 'react';

// const stringToList = (datesString) => {};

const fetchLoginDates = () => {
  const [loginDates, setLoginDates] = useState('');
  useEffect(() => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          // setLoginDates(data.dates_list);
          setLoginDates(data._2022_3);
        }
      });
  }, []);

  let res;

  useEffect(() => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginDates,
        }),
      }
    ).then(() => {
      if (typeof loginDates === 'Array') {
        res = loginDates.map((day) => day);
      }
    });
    console.log(res);
  }, [loginDates]);
  // const copyList = loginDates.map((day) => day);
  // return copyList;
  return [1, 2, 3];
};

export default fetchLoginDates;
