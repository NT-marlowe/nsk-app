import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import TimerContext from '../store/timer-context';

const TimerApp = () => {
  const timerContext = useContext(TimerContext);
  const [inputMinutes, setInputMinutes] = useState(0);
  const handlePressForStart = () => {
    if (inputMinutes > 0) {
      timerContext.setTimerIsOn(true);
      timerContext.setSeconds(inputMinutes * 60);
    }
  };

  const handlePressForStop = () => {
    timerContext.setTimerIsOn(false);
    timerContext.setSeconds(0);
  };

  if (timerContext.timerIsOn) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Timer</Text>
        <View style={styles.button}>
          <Button
            title="Stop Timer"
            containerStyle={styles.containerStyle}
            titleStyle={{ fontWeight: '500' }}
            onPress={handlePressForStop}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Timer</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={(input) => setInputMinutes(input)}
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="input minutes"
          placeholderTextColor="#c0c0c0"
        ></TextInput>
        <Text style={{ fontSize: 20, paddingLeft: 10, alignSelf: 'flex-end' }}>
          [min]
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Set Timer"
          containerStyle={styles.containerStyle}
          titleStyle={{ fontWeight: '500' }}
          onPress={handlePressForStart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
    paddingBottom: 20,
  },

  textInput: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  input: {
    // flex: 0.5,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    height: '60%',
  },

  containerStyle: {
    width: 200,
    height: 40,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
export default TimerApp;
