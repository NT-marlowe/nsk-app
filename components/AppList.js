import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AppIcon from './AppIcon';

const AppList = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <AppIcon name="acrobat" />
      <AppIcon name="amazon" />
      <AppIcon name="android" />
      <AppIcon name="angellist" />
      <AppIcon name="aol" />
      <AppIcon name="appnet" />
      <AppIcon name="appstore" />
      <AppIcon name="bitbucket" />
      <AppIcon name="bitcoin" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '80%',
  },
});

export default AppList;
