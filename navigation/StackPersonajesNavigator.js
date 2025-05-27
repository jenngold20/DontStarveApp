// navigation/StackPersonajesNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonajesScreen from '../screens/StackPersonajes/PersonajesScreen';
import InfoPersonajeScreen from '../screens/StackPersonajes/InfoPersonajeScreen'; 

const Stack = createStackNavigator();

export default function StackPersonajesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#111' },
        headerTintColor: '#FFD700',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Personajes"
        component={PersonajesScreen}
        options={{ title: 'Personajes DST' }}
      />
      <Stack.Screen
        name="InfoPersonaje"
        component={InfoPersonajeScreen} 
        options={({ route }) => ({
          title: route.params?.personaje?.nombre || 'Detalles',
        })}
      />
    </Stack.Navigator>
  );
}
