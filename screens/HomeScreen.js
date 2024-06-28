import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AppContext } from "./AppContext";

const newImage = require("../assets/home_pic.png");
const profileImage = require("../assets/my.png"); // Update with your actual image path

const HomeScreen = ({ navigation, route }) => {
  const { username, image } = useContext(AppContext); // Get image from context
  const [decodedImage, setDecodedImage] = useState(null);

  useEffect(() => {
    if (image) {
      decodeBase64Image(image); // Decode Base64 image when 'image' changes
    }
  }, [image]);

  const decodeBase64Image = (base64Image) => {
    const decodedImage = `data:image/png;base64,${base64Image}`; // Assuming it's PNG format
    setDecodedImage(decodedImage);
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
          <View style={styles.headerContainer}>
            <View style={styles.searchContainer}>
              <TextInput style={styles.searchInput} placeholder="Search" />
              <MaterialIcons name="search" size={20} color="#ccc" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              {decodedImage ? (
                <Image
                  source={{ uri: decodedImage }}
                  style={styles.profileImage}
                />
              ) : (
                <Image source={profileImage} style={styles.profileImage} /> // Fallback to default image
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.greetingText}>Hello, {username}</Text>
        </View>
        {/* Scrollable part */}
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: 90 },
          ]}
          style={{ backgroundColor: "#fff" }}
        >
          <Image source={newImage} style={styles.image} />
          <View style={styles.optionContainer}>
            <OptionItem
              title="Reminders Management"
              iconName="alarm"
              iconColor="#ff6347"
              onPress={() => navigation.navigate("ShowReminders")}
            />
            <OptionItem
              title="Text Summarizing"
              iconName="text-fields"
              iconColor="#4682b4"
              onPress={() => navigation.navigate("TextSummarizing")}
            />
            <OptionItem
              title="Collaborative Reminders"
              iconName="group"
              iconColor="#ff8c00"
              onPress={() => navigation.navigate("CollaborativeReminders")}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const OptionItem = ({ title, iconName, iconColor, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={[styles.optionIcon, { backgroundColor: `${iconColor}1A` }]}>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </View>
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  staticContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    marginTop: -30,
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
