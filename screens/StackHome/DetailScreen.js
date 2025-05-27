import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalle de la aventura en Don't Starve Together 🏕️</Text>
      <Button title="Volver al Inicio" onPress={() => navigation.goBack()} />
    </View>
  );
}
