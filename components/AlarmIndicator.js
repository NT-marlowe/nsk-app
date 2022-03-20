// 一旦セーブしないとsecondsが更新されない

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';

const AlarmIndicator = () => {
  const [seconds, setSeconds] = useState(3000);
  // const [isUpdatingSeconds, setIsUpdatingSeconds] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     'https://nskserver-97f50-default-rtdb.firebaseio.com/timer/timer.json'
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data !== null) {
  //         setSeconds(data.seconds);
  //       }
  //     });
  //   // setIsUpdatingSeconds(false);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   fetch(
  //     'https://nskserver-97f50-default-rtdb.firebaseio.com/timer/timer.json',
  //     {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         seconds,
  //       }),
  //     }
  //   );
  // }, [seconds]);
  // const seconds = 20000;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/ei-clock.png')} />
      <Text style={styles.text}>
        {('000' + Math.trunc(seconds / 3600)).slice(-2)}:
        {('000' + Math.trunc(seconds % 3600) / 60).slice(-2)}:
        {('000' + Math.trunc(seconds % 60)).slice(-2)}
      </Text>
      {/* {seconds < 0 ? null : <Alert>{seconds}</Alert>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
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
