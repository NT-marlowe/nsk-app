// 一旦セーブしないとsecondsが更新されない

import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
// import { TimerContext } from '../App';
import TimerContext from '../store/timer-context';

const TimerIndicator = () => {
  const [duration, setDuration] = useState(5);
  const timerContext = useContext(TimerContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerContext.seconds === 0 && timerContext.timerIsOn) {
        timerContext.setTimerIsOn(false);
        timerContext.setSeconds(-1);
        setDuration(5);
      }
      if (timerContext.timerIsOn && timerContext.seconds > 0) {
        timerContext.setSeconds(() => timerContext.seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timerContext.seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timerContext.timerIsOn && duration > 0) {
        setDuration((dur) => dur - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  if (!timerContext.timerIsOn) {
    if (duration > 0) {
      return <Text>Well Done!</Text>;
    }
    return null;
  }

  console.log(duration);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/ei-clock.png')} />
      <Text style={styles.text}>
        {('000' + Math.trunc(timerContext.seconds / 3600)).slice(-2)}:
        {('000' + Math.trunc((timerContext.seconds % 3600) / 60)).slice(-2)}:
        {('000' + Math.trunc(timerContext.seconds % 60)).slice(-2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    // alignSelf: 'flex-end',
    // flex: 1,
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginRight: 10,
  },
});

export default TimerIndicator;
