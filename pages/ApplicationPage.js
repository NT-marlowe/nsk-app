import React from 'react';
import { View, Text } from 'react-native';
import TmpApp from '../apps/TmpApp';
import Flashcard from '../apps/Flashcard';

const SelectedApp = (appName) => {
  switch (appName.appName) {
    // appNameにはAppIconに渡したnameプロパティが入っているので，それを使って
    // appsディレクトリからインポートしたアプリコンポーネントを選択する

    case 'flashcard':
      console.log(appName);
      return <Flashcard />;
    case 'TmpApp':
      return <TmpApp />;
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

const ApplicationPage = ({ route }) => {
  const { appName } = route.params;
  return (
    <View>
      <SelectedApp appName={appName} />
      <Text>{!appName ? 'Null' : appName}</Text>
    </View>
  );
};

export default ApplicationPage;
