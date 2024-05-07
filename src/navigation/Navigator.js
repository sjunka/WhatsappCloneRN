import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import MainTabNavigator from './MainTabNavigator';
import ContactsScreen from '../screens/ContactsScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: 'whitesmoke'}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="MainTab"
          component={MainTabNavigator}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
