import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHomeNavigator from './StackHomeNavigator';
import StackPersonajesNavigator from './StackPersonajesNavigator';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={StackHomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
<Tab.Screen
  name="Personajes"
  component={StackPersonajesNavigator}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="people-outline" size={size} color={color} />
    ),
  }}
/>

      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}