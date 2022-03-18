import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import vocab from '../assets/flashcard.json';

const Flashcard = () => {
  const random_index = Math.floor(Math.random() * vocab.length);
  let random_false_index = [];
  while (random_false_index.length < 3) {
    const r = Math.floor(Math.random() * vocab.length);
    for (let i = 0; i < random_false_index.length; ++i) {
      if (r == random_false_index[i]) {
        continue;
      }
    }
    if (r == random_index) {
      continue;
    }

    random_false_index.push(r);
  }
  const word = vocab[random_index];

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word.English}</Text>
      <Text style={styles.description}>{word.Japanese}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  word: {},
  description: {},
});

export default Flashcard;
