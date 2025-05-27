import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/StackHome/HomeScreen';
import DetailScreen from '../screens/StackHome/DetailScreen';

const Stack = createStackNavigator();

export default function StackHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
