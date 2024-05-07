import {View, Text, FlatList} from 'react-native';
import React from 'react';

import chats from '../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem/ChatListItem';

const ChatsScreen = props => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} {...props} />}
    />
  );
};

export default ChatsScreen;
