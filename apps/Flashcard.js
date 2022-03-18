import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import vocab from '../assets/flashcard.json';
import AnswerChoice from '../components/flashcard/AnswerChoice';

const Flashcard = () => {
  const [countTenSec, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((countTenSec) => countTenSec - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const random_index = Math.floor(Math.random() * vocab.length);
  let answer_choices_index = [random_index];
  while (answer_choices_index.length < 4) {
    const r = Math.floor(Math.random() * vocab.length);
    for (let i = 0; i < answer_choices_index.length; ++i) {
      if (r == answer_choices_index[i]) {
        continue;
      }
    }

    answer_choices_index.push(r);
  }

  const problem = vocab[random_index];
  const problem_eng = problem.English;
  const random_correct_position = Math.floor(Math.random() * 4);
  answer_choices_index[0] = answer_choices_index[random_correct_position];
  answer_choices_index[random_correct_position] = random_index;

  return (
    <View style={styles.container}>
      <Text style={styles.eng}>{problem_eng}</Text>
      <View style={styles.answerContainer}>
        <AnswerChoice
          self_position={0}
          random_correct_position={random_correct_position}
          Japanese={vocab[answer_choices_index[0]].Japanese}
        />
        <AnswerChoice
          self_position={1}
          random_correct_position={random_correct_position}
          Japanese={vocab[answer_choices_index[1]].Japanese}
        />
        <AnswerChoice
          self_position={2}
          random_correct_position={random_correct_position}
          Japanese={vocab[answer_choices_index[2]].Japanese}
        />
        <AnswerChoice
          self_position={3}
          random_correct_position={random_correct_position}
          Japanese={vocab[answer_choices_index[3]].Japanese}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  answerContainer: {},
  eng: {},
  word: {},
  description: {},
});

export default Flashcard;
