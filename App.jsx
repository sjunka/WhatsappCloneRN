import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator></Navigator>
      <StatusBar></StatusBar>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
