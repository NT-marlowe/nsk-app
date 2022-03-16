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

  // useEffect(() => {
  //   fetch(
  //     'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json',
  //     {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         loginDates,
  //       }),
  //     }
  //   ).then(() => {
  //     console.log('hey');
  //   });
  // }, []);

  const today = new Date().getDate();
  // const todayIsNewLogin = loginDates !== null && !loginDates.includes(today);
  const [todayIsNewLogin, setTodayIsNewLogin] = useState(false);

  useEffect(() => {
    setTodayIsNewLogin(loginDates !== null && !loginDates.includes(today));
  }, [loginDates]);

  if (todayIsNewLogin) {
    console.log(today + ' New login');
    // console.log(loginDates[0]);
  }

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
