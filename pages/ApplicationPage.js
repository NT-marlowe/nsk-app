import React from 'react';
import { View, Text } from 'react-native';
import Flashcard from '../apps/Flashcard';
import OpenURLButton from '../components/OpenURLButton';
import TimerApp from '../apps/TimerApp';
const acrobatURL = 'https://adobeacrobat.app.link';
const title = 'Acrobat';

const ApplicationPage = ({ route }) => {
  const SelectedApp = (appName) => {
    switch (appName.appName) {
      // appNameにはAppIconに渡したnameプロパティが入っているので，それを使って
      // appsディレクトリからインポートしたアプリコンポーネントを選択する

      case 'flashcard':
        console.log(appName);
        return <Flashcard />;

      case 'PDF':
        return <OpenURLButton title={title} url={acrobatURL} />;

      case 'timer':
        return <TimerApp />;

      default:
        return (
          <View>
            <Text>Unknown</Text>
          </View>
        );
    }
  };

  const { appName } = route.params;
  return <SelectedApp appName={appName} />;
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//   },
// });

export default ApplicationPage;
