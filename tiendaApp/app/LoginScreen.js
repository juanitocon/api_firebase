import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("MainTabs");
    } catch (e) {
      alert("Error al iniciar sesión: " + e.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput placeholder="Correo" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Iniciar sesión" onPress={login} />
      <Text onPress={() => navigation.navigate("Register")}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}
