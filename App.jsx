import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import ChatScreens from './src/screens/ChatScreens';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
