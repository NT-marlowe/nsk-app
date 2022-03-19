import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppIcon from './AppIcon';

const AppList = (props) => {
  // const handleLaunchApp = () => {
  //   navigation.navigate('Application');
  // };
  // console.log(props.navigation);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {/* </View>horizontal={true} style={styles.scrollView}> */}
        <AppIcon name="cards-outline" text="flashcard" />
        <AppIcon name="account-group" text="friends" />
        <AppIcon name="alarm" text="alarm" />
        <AppIcon name="exponent" text="maths" />
        <AppIcon name="file-pdf-box" text="PDF" />
        <AppIcon name="archive" text="submit" />
        <AppIcon name="chart-bar-stacked" text="statistics" />
        <AppIcon name="folder" text="folder" />
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
