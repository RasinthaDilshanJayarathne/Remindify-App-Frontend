import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.greeting_1}>Hello,</Text>
        <Text style={styles.greeting_2}>Rasintha</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/home_pic.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reminders Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Text Summarizing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Health Support Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Collaborative Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reminders Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Text Summarizing</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  searchContainer: {
    padding: 20,
    backgroundColor: "#FFF", // Updated color to match the current color of the search bar container
  },
  searchInput: {
    height: 40,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#F8F8F8", // Updated color to white
  },
  headerContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  greeting_1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5B5B57",
    fontFamily: "outfit",
  },
  greeting_2: {
    fontSize: 30,
    fontWeight: "300", // Changed from "light" to "300"
    color: "#5B5B57",
    fontFamily: "outfit",
  },
  imageWrapper: {
    alignItems: "center",
    marginTop: -100,
    marginVertical: -30,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  buttonsContainer: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#F8F8F6",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
    color: "#3A3A3C",
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default Home;
