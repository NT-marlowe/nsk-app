import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import TimerContext from '../store/timer-context';

const TimerApp = () => {
  const timerContext = useContext(TimerContext);
  const [inputMinutes, setInputMinutes] = useState(0);
  const handlePressForStart = () => {
    timerContext.setTimerIsOn(true);
    timerContext.setSeconds(inputMinutes * 60);
  };

  const handlePressForStop = () => {
    timerContext.setTimerIsOn(false);
    timerContext.setSeconds(0);
  };

  if (timerContext.timerIsOn) {
    return (
      <View style={styles.button}>
        <Button title="stop timer" type="solid" onPress={handlePressForStop} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {timerContext.timerIsOn ? <Text>TimerApp</Text> : <Text>No timer</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(input) => setInputMinutes(input)}
        keyboardType="number-pad"
        placeholder="input minutes"
      ></TextInput>
      <Button title="set time" onPress={handlePressForStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
  },
  input: {
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
export default TimerApp;
