// 一旦セーブしないとsecondsが更新されない

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const TotalStudyTime = () => {
  const [seconds, setSeconds] = useState(0);
  // const [isUpdatingSeconds, setIsUpdatingSeconds] = useState(true);

  useEffect(() => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/timer/timer.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          setSeconds(data.seconds);
        }
      });
    // setIsUpdatingSeconds(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (isUpdatingSeconds !== true) {
      setSeconds((seconds) => seconds + 1);
      // }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch(
      'https://nskserver-97f50-default-rtdb.firebaseio.com/timer/timer.json',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seconds,
        }),
      }
    );
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/favicon.png')} />
      <Text style={styles.text}>
        {Math.trunc(seconds / 3600)}時間{Math.trunc((seconds % 3600) / 60)}分
        {/* {Math.trunc(seconds % 60)} */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-end',
    flex: 1,
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

export default TotalStudyTime;
