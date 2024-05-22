import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const reminders = [
  { id: "1", title: "Reminder 01" },
  { id: "2", title: "Reminder 02" },
  { id: "3", title: "Reminder 03" },
  { id: "4", title: "Reminder 04" },
  { id: "5", title: "Reminder 05" },
  { id: "6", title: "Reminder 06" },
];

const ShowReminders = () => {
  const renderItem = ({ item }) => (
    <View style={styles.reminderCard}>
      <Text style={styles.reminderText}>{item.title}</Text>
      <Ionicons name="share-social-outline" size={24} color="black" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.reminderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 16,
  },
  reminderList: {
    justifyContent: "space-between",
  },
  reminderCard: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    margin: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    height: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  reminderText: {
    fontSize: 16,
  },
});

export default ShowReminders;
