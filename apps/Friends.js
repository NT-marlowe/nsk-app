import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FriendCard from '../components/FriendCard';

const Friends = (props) => {
  //   const [friendsLoaded, setFriendsLoaded] = useState(false);
  const [friends, setFriends] = useState([]);
  //   let friends = [];
  useEffect(() => {
    fetch('https://nskserver-97f50-default-rtdb.firebaseio.com/friends.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== null) {
          //   friends = data;
          setFriends(data);
          //   setFriendsLoaded(true);
        }
        // friends.map((d) => console.log(d.name, d.name, d.time));
        // console.log(friends[0].name);
      });
  }, []);

  const lineupCards = (data) => {
    if (friends.length !== 0) {
      return data.map((d) => (
        <FriendCard id={d.id} name={d.name} time={d.time} />
      ));
    } else {
      return null;
    }
  };

  return <View>{lineupCards(friends)}</View>;
};

const styles = StyleSheet.create({});

export default Friends;
