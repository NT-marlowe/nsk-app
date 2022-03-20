import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AnswerChoice from './AnswerChoice';

const ChoicesScreen = (props) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  let image = null;
  if (isSelected) {
    if (isCorrect) {
      image = (
        <Image
          style={styles.image}
          source={require('../../assets/correct.jpg')}
        />
      );
    } else {
      image = (
        <Image
          style={styles.image}
          source={require('../../assets/wrong.png')}
        />
      );
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSelected) {
        setIsSelected(false);
        setIsCorrect(false);
        props.setProblemCount((problemCount) => {
          return problemCount + 1;
        });
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [isSelected]);

  return (
    <View style={styles.container}>
      {image}
      <View style={styles.container}>
        <View style={styles.horizontalContainer}>
          <AnswerChoice
            self_position={0}
            random_correct_position={props.random_correct_position}
            Japanese={props.vocab[props.answer_choices_index[0]].Japanese}
            setIsSelected={setIsSelected}
            setIsCorrect={setIsCorrect}
          />

          <AnswerChoice
            self_position={1}
            random_correct_position={props.random_correct_position}
            Japanese={props.vocab[props.answer_choices_index[1]].Japanese}
            setIsSelected={setIsSelected}
            setIsCorrect={setIsCorrect}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <AnswerChoice
            self_position={2}
            random_correct_position={props.random_correct_position}
            Japanese={props.vocab[props.answer_choices_index[2]].Japanese}
            setIsSelected={setIsSelected}
            setIsCorrect={setIsCorrect}
          />
          <AnswerChoice
            self_position={3}
            random_correct_position={props.random_correct_position}
            Japanese={props.vocab[props.answer_choices_index[3]].Japanese}
            setIsSelected={setIsSelected}
            setIsCorrect={setIsCorrect}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    // alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // borderLeftWidth: 30,
  },
  image: {
    position: 'absolute',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignContent: 'center',
    width: 300,
    height: 300,
  },
  horizontalContainer: {
    alignItems: 'center',
    // flex: 1,
    // borderLeftWidth: 30,
    // width: '70%',
    flexDirection: 'row',
  },
});

export default ChoicesScreen;
