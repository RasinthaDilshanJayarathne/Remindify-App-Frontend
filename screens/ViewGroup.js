import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ViewGroup = () => {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState([
    { id: 1, title: "Reminder 01", content: "This is a reminder" },
    { id: 2, title: "Reminder 02", content: "This is another reminder" },
  ]);

  const [newReminder, setNewReminder] = useState({
    title: "",
    content: "",
  });

  const addReminder = () => {
    setReminders([
      ...reminders,
      {
        id: reminders.length + 1,
        title: newReminder.title,
        content: newReminder.content,
      },
    ]);
    setNewReminder({ title: "", content: "" });
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Group</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("GroupSettings")}
          >
            <Ionicons
              name="settings"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {reminders.map((reminder) => (
          <View key={reminder.id} style={styles.reminderCard}>
            <View style={styles.reminderHeader}>
              <Text style={styles.reminderTitle}>{reminder.title}</Text>
              <TouchableOpacity onPress={() => deleteReminder(reminder.id)}>
                <Ionicons name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.reminderContent}>{reminder.content}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.addReminderContainer}>
        <TouchableOpacity
          style={styles.addReminderButton}
          onPress={addReminder}
        >
          <Text style={styles.addButtonText}>Add Reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  reminderCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  reminderHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reminderContent: {
    marginTop: 8,
  },
  addReminderContainer: {
    padding: 16,
  },
  addReminderButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
  },
});

export default ViewGroup;
