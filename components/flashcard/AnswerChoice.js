import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const AnswerChoice = (props) => {
  const pressHandler = () => {
    if (props.self_position == props.random_correct_position) {
      props.setIsSelected(true);
      props.setIsCorrect(true);
    } else {
      props.setIsSelected(true);
      props.setIsCorrect(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={props.Japanese}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle}
        type="outline"
        raised
        onPress={pressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 100,
    // width: '40%',
    // width: '30%',
  },

  buttonStyle: {
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerStyle: {
    width: 400,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default AnswerChoice;
