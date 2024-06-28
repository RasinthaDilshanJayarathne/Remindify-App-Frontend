import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AppContext } from "./AppContext";

const ShowRemindersScreen = () => {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const { username } = useContext(AppContext);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get(
          `http://192.168.43.217:6060/getReminderByUsername?username=${username}`
        );
        setReminders(response.data.data || []);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchReminders();
    }
  }, [username]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.43.217:6060/deleteReminder/${id}`);
      setReminders(reminders.filter((reminder) => reminder.id !== id));
    } catch (err) {
      setError(err.message || "An error occurred while deleting the reminder");
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Show Reminder</Text>
          <View style={styles.headerIcons}>
            <Icon name="search" size={24} color="#000" style={styles.icon} />
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.greetingText}>Welcome back Reminder App!</Text>
          <View style={styles.remindersContainer}>
            {reminders.map((reminder, index) => (
              <View key={index} style={styles.reminderBox}>
                <Text style={styles.reminderText} numberOfLines={3}>
                  {reminder.message}
                </Text>
                <View style={styles.iconContainer}>
                  <Icon
                    name="share-social-outline"
                    size={20}
                    color="#1DA1F2"
                    style={styles.icon}
                  />
                  <TouchableOpacity onPress={() => handleDelete(reminder.id)}>
                    <Icon
                      name="trash-outline"
                      size={20}
                      color="#e60000"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  icon: {
    marginRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greetingText: {
    fontSize: 16,
    marginBottom: 20,
  },
  remindersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  reminderBox: {
    width: "48%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
    position: "relative",
  },
  reminderText: {
    fontSize: 16,
    marginBottom: 10,
    flexShrink: 1,
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});

export default ShowRemindersScreen;
