import React, {useCallback, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const Message = ({message}) => {
  const isMyMessage = useMemo(() => {
    return message.user.id === 'u1';
  }, [message]);

  const containerStyle = {
    backgroundColor: isMyMessage ? '#DCF8C5' : 'white',
    alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  time: {
    color: 'grey',
    alignSelf: 'flex-end',
  },
});

export default Message;
