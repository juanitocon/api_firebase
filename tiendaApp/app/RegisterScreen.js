import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("MainTabs");
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput placeholder="Correo" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Registrar" onPress={register} />
      <Text onPress={() => navigation.goBack()}>Volver</Text>
    </View>
  );
}
