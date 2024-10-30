import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const images = [
    {
      id: "1",
      source: require('../../assets/images/Imagen1.jpg'),
      description: "Estrella de mar",
    },
    {
      id: "2",
      source: require('../../assets/images/Imagen2.jpg'),
      description: "Paisaje de montaña",
    },
    {
      id: "3",
      source: require('../../assets/images/Imagen3.jpg'),
      description: "Paisaje de playa",
    },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <FlatList
            data={images}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image style={styles.image} source={item.source} />
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    marginTop: 170,
  },
  image: {
    marginTop: 20,
    width: 270,
    height: 270,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5
  },
});