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
    <View>
      <View sytle={styles.input}>
        <TextInput
          onChangeText={(input) => setInputMinutes(input)}
          keyboardType="number-pad"
          placeholder="input minutes"
        ></TextInput>
      </View>
      <View style={styles.button}>
        <Button title="set time" onPress={handlePressForStart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  input: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '60%',
    // flex: 1,
    // width: '%',
    // alignItems: 'center',
  },
});
export default TimerApp;
