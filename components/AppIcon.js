import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Zocial';

const AppIcon = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        name={props.name}
        color="black"
        size={50}
        style={styles.icon}
        onPress={() => {}}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
});

export default AppIcon;
