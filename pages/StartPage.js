import { StyleSheet, View } from 'react-native';
import React from 'react';

import ConfiguredCalendar from '../components/ConfiguredCalendar';
import AppList from '../components/AppList';
import TotalStudyTime from '../components/TotalStudyTime';
import Quotes from '../components/Quotes';

function StartPage() {
  return (
    <View style={styles.container}>
      <TotalStudyTime />

      <ConfiguredCalendar />

      <AppList />

      <Quotes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default StartPage;
