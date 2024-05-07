import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const InputBox = () => {

  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending message: ', newMessage);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <Button title="+" />

      <TextInput
        value={newMessage}
        style={styles.inputText}
        placeholder="Type something here"
        onChangeText={text => setNewMessage(text)}
      />

      <Button title="SEND" onPress={onSend} style={styles.send} />
    </View>
  );
};
export default InputBox;

styles = StyleSheet.create({
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
  send: {
    backgroundColor: 'royalblue',
    borderRadius: 15,
    padding: 7,
    overflow: 'hidden',
  },
});
