import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from './pages/StartPage';
import ApplicationPage from './pages/ApplicationPage';

import TimerIndicator from './components/TimerIndicator';
import { TimerContextProvider } from './store/timer-context';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TimerContextProvider>
        <View style={styles.container}>
          <TimerIndicator />
        </View>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={StartPage}
            options={{ title: 'Start Page' }}
          />
          <Stack.Screen name="Application" component={ApplicationPage} />
        </Stack.Navigator>
      </TimerContextProvider>
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
