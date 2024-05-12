import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAuthenticator} from '@aws-amplify/ui-react-native';

const SettingsScreen = () => {
  const {signOut} = useAuthenticator();

  const SignOutButton = () => {
    return <Button onPress={signOut} title="Sign Out" />;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SignOutButton />
    </View>
  );
};

export default SettingsScreen;
