import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Zocial';

const AppIcon = (props) => {
  const createTwoButtonAlert = () => {
    Alert.alert(props.name, 'Are you launching "' + props.name + '"?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel launch'),
        style: 'cancel',
      },
      {
        text: 'Launch',
        onPress: () => {
          props.navigation.navigate('Application');
        },
        style: 'default',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Icon
        name={props.name}
        color="black"
        size={50}
        style={styles.icon}
        onPress={createTwoButtonAlert}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    margin: 10,
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
