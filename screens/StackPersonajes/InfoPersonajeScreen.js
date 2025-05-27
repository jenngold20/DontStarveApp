import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estiloDST } from '../../components/stylesDTS'; 

export default function InfoPersonajeScreen({ route }) {
  const { personaje } = route.params;

  return (
    <ScrollView contentContainerStyle={estiloDST.scrollContainer}>
      <View style={estiloDST.card}>
        <Image source={personaje.imagen} style={{ 
          width: 250, 
          height: 250, 
          resizeMode: 'contain', 
          alignSelf: 'center', 
          marginBottom: 15 
        }} />

        <Text style={estiloDST.nombre}>{personaje.nombre}</Text>
        <Text style={estiloDST.descripcion}>{personaje.descripcion}</Text>

        <Text style={estiloDST.subtitulo}>Habilidades:</Text>
        {personaje.habilidades.map((hab, index) => (
          <Text key={index} style={estiloDST.habilidad}>• {hab}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
