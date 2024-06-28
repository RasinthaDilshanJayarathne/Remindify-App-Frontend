import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddMembersScreen = () => {
  const navigation = useNavigation();
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
    { id: "11", name: "Rasintha Dilshan", selected: false },
    { id: "12", name: "Rasintha Dilshan", selected: false },
  ]);

  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectAll, setSelectAll] = useState(false); // Track select all state

  // Toggle selection for individual member
  const toggleSelection = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, selected: !member.selected } : member
      )
    );
  };

  // Toggle select all members
  const toggleSelectAll = () => {
    const allSelected = !selectAll;
    setMembers((prevMembers) =>
      prevMembers.map((member) => ({ ...member, selected: allSelected }))
    );
    setSelectAll(allSelected);
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

  const handleShare = () => {
    setIsShareModalVisible(true);
  };

  const handleCreateGroup = () => {
    // Logic to create group with selected members
    console.log("Group created with selected members:", groupName);
    setIsShareModalVisible(false);
    setGroupName("");
    showToast("Group created successfully");
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

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
          <Text style={styles.headerTitle}>Add Members</Text>
          <TouchableOpacity onPress={toggleSelectAll}>
            <Text style={styles.selectAllText}>
              {selectAll ? "Unselect All" : "Select All"}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={members}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 20 }} // Adjust paddingBottom to avoid overlap with the button
        />

        <TouchableOpacity style={styles.fab} onPress={handleShare}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isShareModalVisible}
          onRequestClose={() => setIsShareModalVisible(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setIsShareModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Enter Group Name</Text>
                <View style={styles.inputContainer}>
                  <Icon name="person-circle" size={20} color="#ccc" />
                  <TextInput
                    style={styles.input}
                    placeholder="Group Name"
                    value={groupName}
                    onChangeText={setGroupName}
                  />
                </View>
                <View style={styles.createButtonContainer}>
                  <TouchableOpacity
                    style={styles.createButton}
                    onPress={handleCreateGroup}
                  >
                    <Text style={styles.createButtonText}>Create</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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
  selectAllText: {
    fontSize: 16,
    color: "#1DA1F2",
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
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#1DA1F2",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginBottom: 60,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    height: 40,
  },
  createButtonContainer: {
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#1DA1F2",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddMembersScreen;
