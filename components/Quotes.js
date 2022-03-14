import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import quotes from '../assets/quotes.json';

const Quotes = () => {
  //   let quote;
  //   for (let index = 0; index < quotes.length; index++) {
  //     const element = quotes[index];
  //     if (element.id === 10) {
  //       quote = element;
  //     }
  //   }

  const quote = quotes[10];

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>{quote.quote}</Text>
      <Text style={styles.description}>{quote.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
  },
  quote: {
    fontSize: 20,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 20,
    alignSelf: 'flex-end',
    marginTop: 10,
    fontFamily: 'serif',
  },
});

export default Quotes;
