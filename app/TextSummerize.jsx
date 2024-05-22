import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TextSummerize = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text style={styles.headerText}>Text Summering</Text>
        <FontAwesome name="bell" size={24} color="black" />
      </View>

      <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>

      <TouchableOpacity style={styles.photoButton}>
        <FontAwesome name="camera" size={24} color="white" />
        <Text style={styles.photoButtonText}>TAKE PHOTO</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.imagePlaceholder}
      />

      <TouchableOpacity style={styles.summarizeButton}>
        <Text style={styles.summarizeButtonText}>Summarize Text</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reminderButton}>
          <Text style={styles.buttonText}>GEN REMINDER</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="black" />
        <FontAwesome name="search" size={24} color="black" />
        <FontAwesome name="briefcase" size={24} color="black" />
        <FontAwesome name="cog" size={24} color="black" />
      </View>
    </View>
  );
};

export default TextSummerize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 16,
    color: "#5B5B57",
    marginBottom: 20,
  },
  photoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  photoButtonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  imagePlaceholder: {
    width: "90%",
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
  },
  summarizeButton: {
    width: "90%",
    borderColor: "#1E90FF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  summarizeButtonText: {
    color: "#1E90FF",
    fontSize: 16,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  reminderButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    padding: 10,
  },
});
