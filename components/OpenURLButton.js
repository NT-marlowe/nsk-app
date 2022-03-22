import React, { useCallback } from 'react';
import { Alert, Button } from 'react-native';
import * as Linking from 'expo-linking';

const AcrobatURL = 'https://adobeacrobat.app.link';

export const moveToAcrobat = async () => {
  const supported = await Linking.canOpenURL(AcrobatURL);
  if (supported) {
    await Linking.openURL(AcrobatURL);
  } else {
    Alert.alert(`Don't know how to open this URL: ${AcrobatURL}`);
  }
};

const OpenURLButton = (props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.url);

    if (supported) {
      await Linking.openURL(props.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${props.url}`);
    }
  }, [props.url]);

  return <Button title={props.title} onPress={handlePress} />;
};

export default OpenURLButton;
