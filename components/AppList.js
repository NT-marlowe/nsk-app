import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppIcon from './AppIcon';

const AppList = (props) => {
  // const handleLaunchApp = () => {
  //   navigation.navigate('Application');
  // };
  // console.log(props.navigation);
  if (!props.navigation) console.log('Null');
  else console.log(props.navigation);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {/* </View>horizontal={true} style={styles.scrollView}> */}
        <AppIcon
          name="acrobat"
          // launchApp={() => navigation.navigate('Application')}
        />
        <AppIcon name="amazon" navigation={props.navigation} />
        <AppIcon name="android" />
        <AppIcon name="angellist" />
        <AppIcon name="aol" />
        <AppIcon name="appnet" />
        <AppIcon name="appstore" />
        <AppIcon name="bitbucket" />
        <AppIcon name="bitcoin" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '80%',
  },
  container: {
    height: 120,
    width: '80%',
    flex: 15,
  },
});

export default AppList;
