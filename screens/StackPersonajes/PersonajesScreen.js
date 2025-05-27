import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { personajes } from '../../data/personajes';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../../components/SharedStyles';

const PersonajesScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={SharedStyles.card}
      onPress={() => navigation.navigate('InfoPersonaje', { personaje: item })}
    >
      <Image source={item.imagen} style={SharedStyles.avatar} />
      <Text style={SharedStyles.title}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={SharedStyles.container}>
      <FlatList
        data={personajes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={SharedStyles.list}
      />
    </View>
  );
};

export default PersonajesScreen;
