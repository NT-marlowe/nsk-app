import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CountTenSec = (props) => {
  const [countTenSec, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((countTenSec) => {
        if (countTenSec < 2) {
          props.setIsTimeOut(true);
        }
        return countTenSec - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text>{countTenSec}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountTenSec;
