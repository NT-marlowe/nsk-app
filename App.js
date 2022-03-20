import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import StartPage from './pages/StartPage';
import ApplicationPage from './pages/ApplicationPage';

import AlarmIndicator from './components/AlarmIndicator';

const Stack = createNativeStackNavigator();

export const TimerContext = React.createContext();

export default function App() {
  const [seconds, setSeconds] = useState(10000);
  const [timerIsOn, setTimerIsOn] = useState(false);
  const value = {
    seconds,
    setSeconds,
    timerIsOn,
    setTimerIsOn,
  };

  return (
    <NavigationContainer>
      <TimerContext.Provider value={value}>
        <View style={styles.container}>
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
      </TimerContext.Provider>
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
