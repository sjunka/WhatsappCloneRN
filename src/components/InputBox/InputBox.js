import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending message: ', newMessage);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <TextInput
        value={newMessage}
        style={styles.inputText}
        placeholder="Type something here"
        onChangeText={text => setNewMessage(text)}
      />

      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
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
  addButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  sendButton: {
    backgroundColor: 'royalblue',
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InputBox;
