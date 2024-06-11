import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import axios from "axios";

const LoadingScreen = ({ navigation }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data
    axios
      .get(
        "https://lottie.host/c6173c87-4c8e-4fd1-944a-7bab30206d74/NewLHNwDUa.json"
      )
      .then((response) => {
        setAnimationData(response.data);
        // Navigate to HomeScreen after a delay
        setTimeout(() => {
          navigation.navigate("Home");
        }, 2000); // Adjust duration as needed
      })
      .catch((error) => {
        console.error("Error fetching animation data: ", error);
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {animationData && (
        <LottieView
          source={animationData}
          autoPlay
          loop
          style={styles.loader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loader: {
    width: 150,
    height: 150,
  },
});

export default LoadingScreen;
