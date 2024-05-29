import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const reminders = [
  { id: "1", title: "Reminder 01" },
  { id: "2", title: "Reminder 02" },
  { id: "3", title: "Reminder 03" },
  { id: "4", title: "Reminder 04" },
  { id: "5", title: "Reminder 05" },
  { id: "6", title: "Reminder 06" },
  { id: "7", title: "Reminder 07" },
  { id: "8", title: "Reminder 08" },
  { id: "9", title: "Reminder 09" },
];

const ShowReminders = () => {
  const renderItem = ({ item }) => (
    <View style={styles.reminderCard}>
      <Text style={styles.reminderText}>{item.title}</Text>
      <Ionicons
        name="share-social-outline"
        size={24}
        color="black"
        style={styles.reminderShareIcon}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.showReminderHeader}>
            <Text style={styles.showReminderText}>Show Reminder</Text>
            <FontAwesome name="user" size={30} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
        <FlatList
          data={reminders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.reminderList}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ShowReminders;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
    width: "100%",
  },
  welcomeText: {
    fontSize: 16,
    color: "#5B5B57",
    marginTop: -5,
    marginLeft: 5,
    marginBottom: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: 10,
  },
  showReminderHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  showReminderText: {
    fontSize: 24,
    color: "#5B5B57",
    fontWeight: "bold",
  },
  reminderShareIcon: {
    marginLeft: 100,
    marginTop: 50,
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
    color: "#5B5B57",
  },
  reminderList: {
    paddingHorizontal: 8,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 16,
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
