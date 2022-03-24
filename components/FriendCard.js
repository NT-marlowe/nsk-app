import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
// import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-elements';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';

const imagePath = [
  require('../assets/onepiece00.png'),
  require('../assets/onepiece01.png'),
  require('../assets/onepiece02.png'),
  require('../assets/onepiece03.png'),
  require('../assets/onepiece04.png'),
];

const FriendCard = (props) => {
  let DATA = [];
  const numStar = Math.trunc((props.time % (60 * 60 * 10)) / (60 * 60)); // 1h
  const numAward = Math.trunc((props.time % (60 * 60 * 100)) / (60 * 60 * 10)); // 10h
  const numDiamond = Math.trunc(
    (props.time % (60 * 60 * 1000)) / (60 * 60 * 100)
  );
  const numTrophy = Math.trunc(props.time / (60 * 60 * 1000)); // 1000h

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
    <Card style={styles.card}>
      <View style={styles.container}>
        <View style={styles.photo_name}>
          <Image source={imagePath[props.id]} style={styles.image} />

          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.medals}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal={true}
            style={styles.list}
            inverted={true}
            key={Math.random()}
            keyExtractor={() => Math.random().toString()}
            // keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.text}>
            {Math.trunc(props.time / 3600)} hours{' '}
            {Math.trunc((props.time % 3600) / 60)} minutes
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // marginTop: 10,
    // marginBottom: 20,
    // paddingBottom: 15,
    // paddingTop: 5,
    // borderWidth: 1,
    paddingLeft: 60,
    marginVertical: 24,
  },
  name: {
    fontSize: 25,
    // borderWidth: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
    marginRight: 10,
    // borderWidth: 1,
  },
  photo_name: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  icon: {
    // alignSelf: 'center',
    // margin: 10,
    paddingHorizontal: 3,
    paddingVertical: 4,
    alignSelf: 'flex-end',
    // borderWidth: 1,
  },
  list: {
    //     height: 40,
    // paddingTop: 2,
    alignSelf: 'flex-start',
    // borderWidth: 1,
  },
});

export default FriendCard;
