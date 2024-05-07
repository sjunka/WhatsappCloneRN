import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import moment from 'moment';

const Message = ({message}) => {
  const isMyMessage = useCallback(() => {
    return message.user.id === 'u1';
  }, [message]);

  return (
    <View
      style={[
        styles.shadows,
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default Message;

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  time: {
    color: 'grey',
    alignSelf: 'flex-end',
  },
  shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
