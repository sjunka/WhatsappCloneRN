import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import ChatsScreen from '../screens/ChatsScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icono from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {backgroundColor: 'whitesmoke'},
        headerStyle: {backgroundColor: 'whitesmoke'},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="whatsapp" color={color} size={size} />
          ),
        }}
        name="Status"
        component={NotImplementedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icono name="call-outline" color={color} size={size} />
          ),
        }}
        name="Calls"
        component={NotImplementedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="camera-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Camera"
        component={NotImplementedScreen}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Icono name="chatbubbles-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={20}
              color={'royalblue'}
              style={{marginRight: 15}}
            />
          ),
        }}
        name="Chats"
        component={ChatsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="new-message" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={NotImplementedScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
