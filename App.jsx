import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Navigator from './src/navigation/Navigator';

import {Amplify} from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Navigator />
    </View>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
