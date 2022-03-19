import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const AnswerChoice = (props) => {
  const pressHandler = () => {
    if (props.self_position == props.random_correct_position) {
      props.setIsSelected(true);
      props.setIsCorrect(true);
    } else {
      props.setIsSelected(true);
      props.setIsCorrect(false);
    }
  };
  return (
    <View style={styles.container}>
      <Button title={props.Japanese} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AnswerChoice;
