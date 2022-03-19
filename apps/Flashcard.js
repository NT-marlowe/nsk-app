import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import vocab from '../assets/flashcard.json';
import CountTenSec from '../components/flashcard/CountTenSec';
import ChoicesScreen from '../components/flashcard/ChoicesScreen';

const Flashcard = () => {
  let random_index = Math.floor(Math.random() * vocab.length);
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
  const [forceRender, setForceRender] = useState(false);

  const problem = vocab[random_index];
  const problem_eng = problem.English;
  const random_correct_position = Math.floor(Math.random() * 4);
  answer_choices_index[0] = answer_choices_index[random_correct_position];
  answer_choices_index[random_correct_position] = random_index;

  useEffect(() => {
    if (isTimeOut) {
      setIsTimeOut(false);
    }
  }, [isTimeOut]);

  // useEffect(() => {
  //   if (isSelected) {
  //     random_index = Math.floor(Math.random() * vocab.length);

  //     setIsTimeOut(false);
  //   }
  // }, [isSelected]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsSelected(false);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isSelected]);

  return (
    <View style={styles.container}>
      <CountTenSec isTimeOut={isTimeOut} setIsTimeOut={setIsTimeOut} />
      <View>
        <Text>{isTimeOut ? 'true' : 'false'}</Text>
      </View>
      <Text style={styles.eng}>{problem_eng}</Text>
      <View style={styles.answerContainer}>
        <Text>{console.log(random_index)}</Text>
        <ChoicesScreen
          random_correct_position={random_correct_position}
          vocab={vocab}
          answer_choices_index={answer_choices_index}
          setForceRender={setForceRender}
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
});

export default Flashcard;
