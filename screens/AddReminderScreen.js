import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const AddReminderScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [scrollBackground, setScrollBackground] = useState("transparent");
  const [reminderText, setReminderText] = useState("");

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
        <View style={styles.header}>
          {/* Navigate back to Home on press */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Manage Reminder</Text>
          <View style={styles.headerIcons}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>
        {/* Scrollable part */}
        <ScrollView
          contentContainerStyle={[styles.container, { paddingBottom: 90 }]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ backgroundColor: scrollBackground }}
        >
          <Text style={styles.greetingText}>Welcome back Reminder App!</Text>
          {/* TextInput for keyboard input */}
          <TextInput
            style={styles.reminderInput}
            placeholder="Enter your reminder"
            value={reminderText}
            onChangeText={(text) => setReminderText(text)}
            multiline={true}
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD REMINDER</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
    height: 75,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  greetingText: {
    fontSize: 16,
    marginBottom: 20,
  },
  reminderInput: {
    flex: 1,
    height: 200,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddReminderScreen;
