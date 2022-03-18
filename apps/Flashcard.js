import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import vocab from '../assets/flashcard.json';
import AnswerChoice from '../components/flashcard/AnswerChoice';
import CountTenSec from '../components/flashcard/CountTenSec';

const Flashcard = () => {
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

  const [isTimeOut, setIsTimeOut] = useState(false);

  const problem = vocab[random_index];
  const problem_eng = problem.English;
  const random_correct_position = Math.floor(Math.random() * 4);
  answer_choices_index[0] = answer_choices_index[random_correct_position];
  answer_choices_index[random_correct_position] = random_index;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/correct.jpg')} />
      <CountTenSec isTimeOut={isTimeOut} setIsTimeOut={setIsTimeOut} />
      <View>
        <Text>{isTimeOut ? 'true' : 'false'}</Text>
      </View>
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
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  answerContainer: {},
  eng: {},
  word: {},
  description: {},
  image: {
    position: 'absolute',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignContent: 'center',
    width: 300,
    height: 300,
  },
});

export default Flashcard;
