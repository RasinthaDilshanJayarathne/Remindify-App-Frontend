import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const newImage = require("../assets/home_pic.png");

const HomeScreen = ({ navigation }) => {
  const [scrollBackground, setScrollBackground] = useState("transparent");

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100; // Adjust this threshold as needed
    if (offsetY > threshold) {
      setScrollBackground("#f0f0f0"); // Change background color when scrolling
    } else {
      setScrollBackground("transparent"); // Reset to transparent when scrolling back to top
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={{ flex: 1 }}>
        {/* Static part */}
        <View style={styles.staticContainer}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search" />
            <Icon name="search" size={20} color="#ccc" />
          </View>
          <Text style={styles.greetingText}>Hello Rasintha,</Text>
        </View>
        {/* Scrollable part */}
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: 90 },
          ]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ backgroundColor: scrollBackground }}
        >
          <Image source={newImage} style={styles.image} />
          <View style={styles.optionContainer}>
            <OptionItem
              title="Reminders Management"
              onPress={() => navigation.navigate("ShowReminders")}
            />
            <OptionItem
              title="Text Summarizing"
              onPress={() => navigation.navigate("ShowSummarizing")}
            />
            <OptionItem title="Health Support Reminders" />
            <OptionItem title="Collaborative Reminders" />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const OptionItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.optionIcon}>
      <Icon name="notifications" size={20} color="#000" />
    </View>
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
  },
  staticContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    height: 30,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  optionContainer: {
    flex: 1,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
