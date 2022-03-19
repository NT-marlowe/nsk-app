import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CorrectScreen from './CorrectScreen';
import WrongScreen from './WrongScreen';

const AnswerChoice = (props) => {
  const pressHandler = () => {
    if (props.self_position == props.random_correct_position) {
      return <CorrectScreen />;
    } else {
      return <WrongScreen />;
    }
  };
  return (
    <View style={styles.container}>
      <Button title={props.Japanese} onPressed={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AnswerChoice;
