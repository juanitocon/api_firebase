import React from "react";
import { View, Text } from "react-native";

export default function OriginalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pestaña Original 💡</Text>
      <Text>Ejemplo: muestra estadísticas o algo creado por ti.</Text>
    </View>
  );
}
