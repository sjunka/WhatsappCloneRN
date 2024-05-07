import React, {useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending message: ', newMessage);
    setNewMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="plus" size={24} color="royalblue" />
      </TouchableOpacity>

      <TextInput
        value={newMessage}
        style={styles.inputText}
        placeholder="Type something here"
        onChangeText={text => setNewMessage(text)}
      />

      <TouchableOpacity onPress={onSend}>
        <MaterialCommunityIcons
          name="send-circle"
          size={28}
          color="royalblue"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  inputText: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
});

export default InputBox;
