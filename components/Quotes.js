import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import quotes from '../assets/quotes.json';

const Quotes = () => {
  const random_index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random_index];

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
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  quote: {
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
    fontFamily: 'serif',
  },
});

export default Quotes;
