// import 'react-native-gesture-handler';
import {
  NavigationContainer,
  NavigationContext,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import StartPage from './pages/StartPage';
import ApplicationPage from './pages/ApplicationPage';

const Stack = createNativeStackNavigator();
const navigationCtx = React.useContext(NavigationContext);

export default function App() {
  return (
    <NavigationContainer>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
