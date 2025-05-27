import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import sharedStyles from "../components/SharedStyles";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", `Usuario: ${username}\nContraseña: ${password}`);
    // Aquí luego podrías integrar tu lógica de autenticación
  };

  return (
    <View style={[sharedStyles.container, { justifyContent: "center", padding: 20 }]}>
      <Text style={[sharedStyles.headerText, { marginBottom: 30 }]}>Iniciar Sesión</Text>

      <Text style={sharedStyles.subtitulo}>Usuario</Text>
      <TextInput
        style={[sharedStyles.input, { marginBottom: 20, backgroundColor: "#333", color: "#fff", paddingHorizontal: 15, borderRadius: 8 }]}
        placeholder="Ingrese su usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <Text style={sharedStyles.subtitulo}>Contraseña</Text>
      <TextInput
        style={[sharedStyles.input, { marginBottom: 30, backgroundColor: "#333", color: "#fff", paddingHorizontal: 15, borderRadius: 8 }]}
        placeholder="Ingrese su contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [
          sharedStyles.button,
          pressed && sharedStyles.buttonPressed,
          { alignSelf: "center", paddingHorizontal: 50 }
        ]}
      >
        <Text style={sharedStyles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}
