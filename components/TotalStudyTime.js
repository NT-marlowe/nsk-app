// 一旦セーブしないとsecondsが更新されない
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';

const TotalStudyTime = () => {
  const [seconds, setSeconds] = useState(0);

  let DATA = [];
  const numStar = Math.trunc((seconds % (60 * 60 * 10)) / (60 * 60)); // 1h
  const numAward = Math.trunc((seconds % (60 * 60 * 100)) / (60 * 60 * 10)); // 10h
  const numDiamond = Math.trunc((seconds % (60 * 60 * 1000)) / (60 * 60 * 100));
  const numTrophy = Math.trunc(seconds / (60 * 60 * 1000)); // 1000h

  for (let i = 0; i < numStar; i++) {
    DATA.push({ name: 'star', font: 'FA5', size: 12 });
  }
  for (let i = 0; i < numAward; i++) {
    DATA.push({ name: 'award', font: 'FA5', size: 16 });
  }
  for (let i = 0; i < numDiamond; i++) {
    DATA.push({ name: 'diamond', font: 'FA', size: 20 });
  }
  for (let i = 0; i < numTrophy; i++) {
    DATA.push({ name: 'trophy', font: 'FA5', size: 25 });
  }
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds != 0) {
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
    }
  }, [seconds]);

  const renderItem = ({ item }) => {
    if (item.font === 'FA') {
      return (
        <FA
          name={item.name}
          color="black"
          size={item.size}
          style={styles.icon}
        />
      );
    } else {
      return (
        <FA5
          name={item.name}
          color="black"
          size={item.size}
          style={styles.icon}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
        style={styles.list}
        inverted={true}
        keyExtractor={() => Math.random().toString()}
        // keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.text}>
        {Math.trunc(seconds / 3600)} hours {Math.trunc((seconds % 3600) / 60)}{' '}
        min.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    // marginBottom: 20,
    // paddingBottom: 15,
    // paddingTop: 5,
    alignSelf: 'flex-end',
    // flex: 1,
    // borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginRight: 30,
    paddingTop: 10,
    // borderWidth: 1,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginRight: 10,
    // borderWidth: 1,
  },
  icon: {
    // alignSelf: 'center',
    // margin: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,
    alignSelf: 'flex-end',
    // borderWidth: 1,
  },
  list: {
    // height: 40,
    // paddingTop: 2,
    marginRight: 10,
    // borderWidth: 1,
  },
});

export default TotalStudyTime;
