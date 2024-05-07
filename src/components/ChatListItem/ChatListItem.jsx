// import React from 'react';

import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ChatListItem = ({chat}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Chat', {id: chat.id, name: chat.user.name});
      }}
      style={styles.container}>
      <Image source={{uri: chat.user.image}} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.subtitle}>
            {moment(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.subtitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};
export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
});
