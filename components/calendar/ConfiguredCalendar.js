import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from 'react-native-calendars';
import fetchLoginDates from './fetchLoginDates';

function ConfiguredCalendar() {
  const [loginDates, setLoginDates] = useState([]);
  const [datesFetchIsDone, setDatesFetchIsDone] = useState(false);
  const [loginIsAdded, setLoginIsAdded] = useState(false);
  const today = new Date().getDate();

  useEffect(() => {
    // setDatesFetchIsDone(false);
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json'
    )
      .then((response) => {
        // setDatesFetchIsDone(true);
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          setLoginDates(data._2022_3);
          setDatesFetchIsDone(true);
          console.log('fetch now');
        }
      });
  }, []);

  useEffect(() => {
    const todayIsNewLogin = loginDates !== null && !loginDates.includes(today);
    if (datesFetchIsDone) {
      console.log('Hey  ' + loginDates);
      if (todayIsNewLogin) {
        console.log('Login Bonus!!');
        setLoginDates([...loginDates, today]);
        console.log(loginDates);
        setLoginIsAdded(true);
      } else {
        console.log('No login bonus');
        console.log(loginDates);
      }
    }
    // }, []);
  }, [datesFetchIsDone]);

  // const updateLoginDatesOnFirebase = () => {
  useEffect(() => {
    if (loginDates.length > 0 && loginDates.includes(today)) {
      console.log('before patch');
      console.log(loginDates);
      fetch(
        'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _2022_3: loginDates,
          }),
        }
      ).then(() => {
        console.log('Updating');
        console.log(loginDates);
      });
    }
    // }, [loginDates]);
  }, [loginIsAdded]);
  // }, []);

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
