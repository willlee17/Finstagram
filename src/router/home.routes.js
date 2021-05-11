import React from 'react';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: "Instagram",
          headerLeft: () => (
              <Feather name="camera" size={25} color={"#000"} />
          ), 
          headerLeftContainerStyle: {
            marginLeft: 15
          },
          headerTitle: () => (
            <Image source={require('../assets/logo.png')} resizeMode="contain" style={{width: 135 }}/>
          ),
          headerRight: () => (
              <Ionicons name="paper-plane-outline" size={25} color={"#545454"} />
          ), 
          headerRightContainerStyle: {
            marginRight: 15
          },
        }} 
      />
  </HomeStack.Navigator>
  )
}

export default HomeRoutes; 