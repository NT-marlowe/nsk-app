import React from 'react';
import { View, Text } from 'react-native';
import Flashcard from '../apps/Flashcard';
// import OpenURLButton from '../components/OpenURLButton';
import TimerApp from '../apps/TimerApp';

const ApplicationPage = ({ route }) => {
  const SelectedApp = (appName) => {
    switch (appName.appName) {
      // appNameにはAppIconに渡したnameプロパティが入っているので，それを使って
      // appsディレクトリからインポートしたアプリコンポーネントを選択する

      case 'English':
        console.log(appName);
        return <Flashcard />;

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

export default ApplicationPage;
