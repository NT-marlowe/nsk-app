// 一旦セーブしないとsecondsが更新されない
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const TotalStudyTime = () => {
  const [seconds, setSeconds] = useState(0);

  let DATA = [];
  let tmpSec = seconds;
  const numStar = Math.trunc(tmpSec / (60 * 60));
  const numTriforce = Math.trunc((seconds % (60 * 60)) / (60 * 10));
  for (let i = 0; i < Math.trunc((seconds % 600) / 60); i++) {
    DATA.push({ name: 'trophy' });
  }
  for (let i = 0; i < numTriforce; i++) {
    DATA.push({ name: 'triforce' });
  }
  for (let i = 0; i < numStar; i++) {
    DATA.push({ name: 'trophy-award' });
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

  const renderItem = ({ item }) => {
    return <MCI name={item.name} color="black" size={20} style={styles.icon} />;
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
      />

      <Text style={styles.text}>
        {Math.trunc(seconds / 3600)}時間{Math.trunc((seconds % 3600) / 60)}分
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
  icon: {
    // alignSelf: 'center',
    // margin: 10,
  },
  list: {
    marginRight: 10,
  },
});

export default TotalStudyTime;
