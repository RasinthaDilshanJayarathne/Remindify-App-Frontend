import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AddMembersScreen = () => {
  const [members, setMembers] = useState([
    { id: "1", name: "Rasintha Dilshan", selected: true },
    { id: "2", name: "Rasintha Dilshan", selected: true },
    { id: "3", name: "Rasintha Dilshan", selected: false },
    { id: "4", name: "Rasintha Dilshan", selected: false },
    { id: "5", name: "Rasintha Dilshan", selected: false },
    { id: "6", name: "Rasintha Dilshan", selected: false },
    { id: "7", name: "Rasintha Dilshan", selected: true },
    { id: "8", name: "Rasintha Dilshan", selected: true },
    { id: "9", name: "Rasintha Dilshan", selected: false },
    { id: "10", name: "Rasintha Dilshan", selected: false },
    { id: "11", name: "Rasintha Dilshan", selected: false },
    { id: "12", name: "Rasintha Dilshan", selected: false },
  ]);

  const toggleSelection = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, selected: !member.selected } : member
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memberItem}
      onPress={() => toggleSelection(item.id)}
    >
      <View style={styles.memberInfo}>
        <Icon name="person" size={20} color="#000" />
        <Text style={styles.memberName}>{item.name}</Text>
      </View>
      <Icon
        name={item.selected ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={item.selected ? "#4CAF50" : "#ccc"}
      />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Add Members</Text>
        <Text style={styles.welcomeText}>Welcome back, Reminder App!</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Organization"
          />
          <Icon name="search" size={20} color="#ccc" />
        </View>
        <FlatList
          data={members}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    height: 40,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  memberInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  memberName: {
    fontSize: 16,
    marginLeft: 10,
  },
  shareButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  shareButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddMembersScreen;
