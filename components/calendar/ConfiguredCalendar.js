import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from 'react-native-calendars';
import generateMarkedDates from './generateMarkedDates';

function ConfiguredCalendar() {
  const [loginDates, setLoginDates] = useState([]);
  const [datesFetchIsDone, setDatesFetchIsDone] = useState(false);
  const [loginIsAdded, setLoginIsAdded] = useState(false);
  const today = new Date().getDate();

  useEffect(() => {
    if (!loginDates.includes(today)) {
      fetch(
        'https://nskserver-97f50-default-rtdb.firebaseio.com/login_dates.json'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data !== null) {
            setLoginDates(data._2022_3);
            setDatesFetchIsDone(true);
          }
        });
    }
  }, []);

  useEffect(() => {
    const todayIsNewLogin = loginDates !== null && !loginDates.includes(today);
    if (datesFetchIsDone) {
      if (todayIsNewLogin) {
        setLoginDates([...loginDates, today]);
        setLoginIsAdded(true);
      } else {
      }
    }
  }, [datesFetchIsDone]);

  useEffect(() => {
    if (loginDates.length > 0 && loginDates.includes(today)) {
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
      ).then(() => {});
    }
  }, [loginIsAdded]);

  const markedDates = generateMarkedDates(loginDates);
  return (
    <View style={styles.calendar}>
      <Calendar markedDates={markedDates} />
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
