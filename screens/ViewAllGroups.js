import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ViewAllGroups = () => {
  const navigation = useNavigation();
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const groups = [
    { id: "1", name: "Group 01" },
    { id: "2", name: "Group 02" },
    { id: "3", name: "Group 03" },
    { id: "4", name: "Group 01" },
    { id: "5", name: "Group 02" },
    { id: "6", name: "Group 03" },
    { id: "7", name: "Group 03" },
    { id: "8", name: "Group 01" },
    { id: "9", name: "Group 02" },
    { id: "10", name: "Group 03" },
  ];

  const handleGroupPress = (groupId) => {
    setSelectedGroupId(groupId);
    navigation.navigate("ViewGroup", { groupId }); // Navigate to ViewGroup screen with groupId as parameter
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.groupItem,
        selectedGroupId === item.id && styles.selectedGroupItem,
      ]}
      onPress={() => handleGroupPress(item.id)}
    >
      <View style={styles.groupIcon}>
        <Icon name="eye-outline" size={24} color="#fff" />
      </View>
      <Text style={styles.groupName}>{item.name}</Text>
      <Icon name="eye-outline" size={24} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Groups</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="#000" style={styles.icon} />
          <Icon name="notifications" size={24} color="#000" />
        </View>
      </View>
      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  backButton: {
    padding: 8,
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
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  groupItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedGroupItem: {
    backgroundColor: "#2196F3",
  },
  groupIcon: {
    backgroundColor: "#2196F3",
    padding: 8,
    borderRadius: 50,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default ViewAllGroups;
