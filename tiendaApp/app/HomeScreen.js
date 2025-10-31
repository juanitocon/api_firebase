import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const filterByPrice = () => {
    setFiltered(products.filter(p => p.price < 50));
  };

  const searchProducts = (text) => {
    setSearch(text);
    setFiltered(products.filter(p => p.title.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput placeholder="Buscar producto..." value={search} onChangeText={searchProducts} />
      <Button title="Filtrar menores de $50" onPress={filterByPrice} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ margin: 8 }}>{item.title} - ${item.price}</Text>
        )}
      />
    </View>
  );
}
