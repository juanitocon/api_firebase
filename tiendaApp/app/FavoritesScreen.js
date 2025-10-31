import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "favoritos"));
      setFavorites(querySnapshot.docs.map(doc => doc.data()));
    };
    loadFavorites();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
