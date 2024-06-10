import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const summaries = [
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
  "Summery 01",
];

const ShowSummarizingScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
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
          <View style={styles.summariesContainer}>
            {summaries.map((reminder, index) => (
              <View key={index} style={styles.summaryBox}>
                <Text style={styles.summaryText}>{reminder}</Text>
                <Icon name="share-social-outline" size={20} color="#000" />
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
  summariesContainer: {
    flexDirection: "column",
  },
  summaryBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 10,
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

export default ShowSummarizingScreen;
