import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ConfiguredCalendar from '../components/ConfiguredCalendar';
import AppList from '../components/AppList';


function StartPage() {
  return (
    <View style={styles.container}>

      <ConfiguredCalendar />
      <View style={{ flex: 3 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

      <AppList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartPage;
