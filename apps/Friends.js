import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import FriendCard from '../components/FriendCard';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://nskserver-97f50-default-rtdb.firebaseio.com/friends.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          setFriends(data);
        }
      });
  }, []);

  const LineupCards = (data) => {
    if (data.length !== 0) {
      return data.map((d) => (
        <FriendCard id={d.id} name={d.name} time={d.time} key={d.id} />
      ));
    } else {
      return null;
    }
  };

  return <ScrollView>{LineupCards(friends)}</ScrollView>;
};

const styles = StyleSheet.create({});

export default Friends;
