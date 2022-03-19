import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AnswerChoice from './AnswerChoice';

const ChoicesScreen = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSelected(false);
      setIsCorrect(false);
      props.setForceRender(true);
      props.setForceRender(false);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isSelected]);

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

  return (
    <View style={styles.container}>
      {image}
      <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    position: 'absolute',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignContent: 'center',
    width: 300,
    height: 300,
  },
});

export default ChoicesScreen;
