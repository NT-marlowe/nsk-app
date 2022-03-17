import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from 'react-native-calendars';
// import fetchLoginDates from './fetchLoginDates';

function ConfiguredCalendar() {
  const [loginDates, setLoginDates] = useState([]);

  useEffect(() => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          setLoginDates(data._2022_3);
        }
      });
  }, []);

  const [loginRecordIsDone, setLoginRecordisDone] = useState(false);

  const updateLoginDatesOnFirebase = () => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json',
      {
        method: 'PATCH',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginDates,
        }),
      }
    ).then(() => {});
  };

  const today = new Date().getDate();
  const [todayIsNewLogin, setTodayIsNewLogin] = useState(false);

  useEffect(() => {
    setTodayIsNewLogin(loginDates !== null && !loginDates.includes(today));
    if (todayIsNewLogin) {
      console.log('Login Bonus!!');
      setLoginDates([...loginDates, today]);
      setLoginRecordisDone(true);
      updateLoginDatesOnFirebase();
    } else {
      console.log(loginDates);
    }
  }, [loginDates]);

  return (
    <View style={styles.calendar}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: '80%',
    flex: 20,
  },
});

export default ConfiguredCalendar;
