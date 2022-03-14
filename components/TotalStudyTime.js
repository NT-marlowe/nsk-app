import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const TotalStudyTime = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/favicon.png')} />
      <Text style={styles.text}>9時間41分</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'flex-end',
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
