import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Import the image from the assets folder
const exploreImage = require("../assets/explore.png");

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Use the imported image */}
      <Image source={exploreImage} style={styles.image} />
      <Text style={styles.title}>Explore the app</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maecenas
        quis interdum enim enim molestie faucibus. Pretium non non massa eros,
        nunc, urna. Ac laoreet sagittis donec vel. Amet, duis justo, quam
        quisque egestas. Quam enim at dictum condimentum. Suspendisse.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 65,
  },
  button: {
    backgroundColor: "#1DA1F2",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
