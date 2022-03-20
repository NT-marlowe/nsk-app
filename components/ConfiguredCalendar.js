import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from 'react-native-calendars';

function ConfiguredCalendar() {
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