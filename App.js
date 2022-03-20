import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import StartPage from './pages/StartPage';
import ApplicationPage from './pages/ApplicationPage';

import AlarmIndicator from './components/AlarmIndicator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Text>hoge</Text> */}
        <AlarmIndicator />
      </View>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={StartPage}
          options={{ title: 'Start Page' }}
        />
        <Stack.Screen name="Application" component={ApplicationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
