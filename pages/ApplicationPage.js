import React from 'react';
import { View, Text, Button } from 'react-native';
import TmpApp from '../apps/TmpApp';
import Flashcard from '../apps/Flashcard';
import TestURLButton from '../components/TestURLButton';
// import { Linking } from 'react-native';
import * as Linking from 'expo-linking';

const acrobatURL = 'https://adobeacrobat.app.link';
// const acrobatURL = 'https://google.com';
const title = 'Acrobat';

const SelectedApp = (appName) => {
  switch (appName.appName) {
    // appNameにはAppIconに渡したnameプロパティが入っているので，それを使って
    // appsディレクトリからインポートしたアプリコンポーネントを選択する

    case 'flashcard':
      console.log(appName);
      return <Flashcard />;

    case 'PDF':
      // return <Button title={title} onPress={() => console.log(acrobatURL)} />;
      return (
        <View>
          {/* <TestURLButton /> */}
          <Button title={title} onPress={() => Linking.openURL(acrobatURL)} />
          <Text>hogege</Text>
        </View>
      );

    case 'TmpApp':
      return <TmpApp />;

    case 'ios':
      return (
        <View>
          <Text>iOS</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>Unknown</Text>
        </View>
      );
  }
};

//   const isSupportedURL = Linking.canOpenURL(url);
//   console.log('checking...');
//   if (isSupportedURL) {
//     console.log('success');
//     Linking.openURL(url);
//   } else {
// Alert.alert('Cannot open url');
//     console.log('invalid url');
//   }
// };

const ApplicationPage = ({ route }) => {
  const { appName } = route.params;
  return (
    <View>
      <SelectedApp appName={appName} />
      <Text>{!appName ? 'Null' : appName}</Text>
      <TestURLButton />
    </View>
  );
};

export default ApplicationPage;
