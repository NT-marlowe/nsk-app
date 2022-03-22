import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import vocab from '../assets/flashcard.json';
import CountTenSec from '../components/flashcard/CountTenSec';
import ChoicesScreen from '../components/flashcard/ChoicesScreen';

const Flashcard = () => {
  const [problemCount, setProblemCount] = useState(0);

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
      {/* <View style={{ alignItems: 'center' }}> */}
      <Text style={styles.eng}>{problem_eng}</Text>
      {/* </View> */}
      <View style={styles.answerContainer}>
        <ChoicesScreen
          random_correct_position={random_correct_position}
          vocab={vocab}
          answer_choices_index={answer_choices_index}
          setProblemCount={setProblemCount}
        />
      </View>
      <View style={styles.countContainer}>
        <CountTenSec
          problemCount={problemCount}
          setProblemCount={setProblemCount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '100%',
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  answerContainer: {
    alignItems: 'center',
    flex: 1.5,
    // justifyContent: 'center',
    // marginLeft: '10%',
  },
  countContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },
  eng: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 100,
    paddingTop: 80,
  },
});

export default Flashcard;
