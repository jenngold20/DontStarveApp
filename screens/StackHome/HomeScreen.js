import React from "react";
import { View, Text, Pressable, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import sharedStyles from "../../components/SharedStyles";
import TipDelDia from "../../components/TipDelDia";
const backgroundImg = require("../../assets/dst_background.png");

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImg}
      style={sharedStyles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={sharedStyles.scrollContainer}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={sharedStyles.headerText}>
            Don't Starve Together App
          </Text>
          <Text style={sharedStyles.subtitleText}>
            Sobrevive al día con estos consejos
          </Text>
        </View>

         <TipDelDia />

        <Pressable
          onPress={() => alert("¡Desafíos del día pronto!")}
          style={({ pressed }) => [
            sharedStyles.button,
            pressed && sharedStyles.buttonPressed,
            sharedStyles.buttonCenter,
          ]}
        >
          <Text style={sharedStyles.buttonText}>Desafíos del día</Text>
        </Pressable>

        <Pressable
          onPress={() => alert("Conectate con la comunidad DST en Discord")}
          style={({ pressed }) => [
            sharedStyles.button,
            pressed && sharedStyles.buttonPressed,
            sharedStyles.buttonCenter,
            { marginTop: 15 },
          ]}
        >
          <Text style={sharedStyles.buttonText}>Comunidad y Foros</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}
