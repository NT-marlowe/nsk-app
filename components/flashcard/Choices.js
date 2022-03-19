import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnswerChoiceScreen from './AnswerChoiceScreen';

const Choices = (props) => {
  return (
    <View style={styles.container}>
      <AnswerChoice
        self_position={0}
        random_correct_position={props.random_correct_position}
        Japanese={props.vocab[answer_choices_index[0]].Japanese}
      />
      <AnswerChoice
        self_position={1}
        random_correct_position={props.random_correct_position}
        Japanese={props.vocab[answer_choices_index[1]].Japanese}
      />
      <AnswerChoice
        self_position={2}
        random_correct_position={props.random_correct_position}
        Japanese={props.vocab[answer_choices_index[2]].Japanese}
      />
      <AnswerChoice
        self_position={3}
        random_correct_position={props.random_correct_position}
        Japanese={props.vocab[answer_choices_index[3]].Japanese}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Choices;
