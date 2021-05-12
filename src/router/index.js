import React from 'react';

import BottomHomeNavigator from './bottomNavigator.routes';
import StoryScreen from '../screens/StoryScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen
          name={"Home"} 
          component={BottomHomeNavigator}
          options={{
              headerShown: false
          }}
        />
        <RootStack.Screen 
          name="Story" 
          component={StoryScreen}
          options={{
            headerShown: false
          }}
        />
    </RootStack.Navigator>
  )
}

export default Router; 