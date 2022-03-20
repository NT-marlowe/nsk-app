// 一旦セーブしないとsecondsが更新されない

import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TimerContext } from '../App';

const AlarmIndicator = () => {
  const { seconds, setSeconds } = useContext(TimerContext);
  const timerContext = useContext(TimerContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!timerContext.timerIsOn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/ei-clock.png')} />
      <Text style={styles.text}>
        {('000' + Math.trunc(seconds / 3600)).slice(-2)}:
        {('000' + Math.trunc((seconds % 3600) / 60)).slice(-2)}:
        {('000' + Math.trunc(seconds % 60)).slice(-2)}
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

export default AlarmIndicator;
