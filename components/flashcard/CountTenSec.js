import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CountTenSec = (props) => {
  const [countTenSec, setCountTenSec] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountTenSec((countTenSec) => {
        return countTenSec - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (countTenSec < 1) {
      props.setProblemCount((problemCount) => {
        problemCount + 1;
      });
    }
  }, [countTenSec]);

  useEffect(() => {
    setCountTenSec(10);
  }, [props.problemCount]);

  return (
    <View>
      <Text>{countTenSec}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountTenSec;
