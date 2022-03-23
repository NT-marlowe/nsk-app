import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moveToAcrobat } from './OpenURLButton';

const AppIcon = (props) => {
  const navigation = React.useContext(NavigationContext);
  const createTwoButtonAlert = () => {
    Alert.alert(props.text, 'Are you launching "' + props.text + '"?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel launch'),
        style: 'cancel',
      },
      {
        text: 'Launch',
        onPress: () => {
          if (props.text == 'textbook') {
            moveToAcrobat();
          } else {
            navigation.navigate('Application', {
              appName: props.text,
            });
          }
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
      <Text>{props.text}</Text>
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
