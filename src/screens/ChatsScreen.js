import {View, Text, FlatList} from 'react-native';
import React from 'react';

import chats from '../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem/ChatListItem';

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      style={{backgroundColor: 'white'}}
      renderItem={({item}) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;
