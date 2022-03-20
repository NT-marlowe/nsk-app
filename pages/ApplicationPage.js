import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Flashcard from '../apps/Flashcard';
import TimerApp from '../apps/TimerApp';

const ApplicationPage = ({ route }) => {
  const SelectedApp = (appName) => {
    switch (appName.appName) {
      // appNameにはAppIconに渡したnameプロパティが入っているので，それを使って
      // appsディレクトリからインポートしたアプリコンポーネントを選択する

      case 'flashcard':
        console.log(appName);
        return <Flashcard />;

      case 'timer':
        return <TimerApp />;

      case 'android':
        return (
          <View>
            <Text>Android</Text>
          </View>
        );
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

  const { appName } = route.params;
  return (
    <View>
      <SelectedApp appName={appName} />
      <Text>{!appName ? 'Null' : appName}</Text>
    </View>
  );
};

export default ApplicationPage;
