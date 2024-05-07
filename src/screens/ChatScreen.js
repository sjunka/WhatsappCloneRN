import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import bg from '../assets/images/BG.png';

import Message from '../components/Message/Message';
import messages from '../assets/data/messages.json';
import InputBox from '../components/InputBox/InputBox';

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox></InputBox>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 5,
  },
});
