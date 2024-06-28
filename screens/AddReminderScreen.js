import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Import Axios
import { AppContext } from "./AppContext";

const AddReminderScreen = () => {
  const navigation = useNavigation();
  const { username } = useContext(AppContext);
  const [scrollBackground, setScrollBackground] = useState("transparent");
  const [reminderText, setReminderText] = useState("");

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100;
    if (offsetY > threshold) {
      setScrollBackground("#f0f0f0");
    } else {
      setScrollBackground("transparent");
    }
  };

  const handleAddReminder = async () => {
    try {
      const response = await fetch("http://192.168.43.217:6060/addReminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          message: reminderText,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      ToastAndroid.show("Reminder Successfully Added", ToastAndroid.SHORT);
      // Clear reminderText input
      setReminderText("");
    } catch (error) {
      Alert.alert("Error");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Manage Reminder</Text>
          <View style={styles.headerIcons}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={[styles.container, { paddingBottom: 90 }]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ backgroundColor: scrollBackground }}
        >
          <Text style={styles.greetingText}>Welcome back Reminder App!</Text>
          <TextInput
            style={styles.reminderInput}
            placeholder="Enter your reminder"
            value={reminderText}
            onChangeText={(text) => setReminderText(text)}
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddReminder}
          >
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
    marginBottom: 60,
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
    textAlignVertical: "top",
  },
  addButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddReminderScreen;
