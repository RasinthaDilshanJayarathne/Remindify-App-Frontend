import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const GroupSettings = ({ onAddMember }) => {
  const navigation = useNavigation();
  const [members, setMembers] = useState([
    { id: "1", name: "John Doe", selected: true },
    { id: "2", name: "Jane Smith", selected: true },
    { id: "3", name: "Alice Johnson", selected: false },
    { id: "4", name: "Bob Brown", selected: false },
    { id: "5", name: "Charlie Davis", selected: false },
    { id: "6", name: "Diana Evans", selected: false },
    { id: "7", name: "Ethan Foster", selected: true },
    { id: "8", name: "Fiona Green", selected: true },
    { id: "9", name: "George Harris", selected: false },
    { id: "10", name: "Hannah Lee", selected: false },
    { id: "11", name: "Ian Miller", selected: false },
    { id: "12", name: "Jack Nelson", selected: false },
    { id: "13", name: "Kelly Olson", selected: false },
    { id: "14", name: "Liam Peters", selected: false },
    { id: "15", name: "Mona Quill", selected: false },
    { id: "16", name: "Nina Roberts", selected: false },
  ]);
  const [newMembers, setNewMembers] = useState([
    { id: "new-17", name: "Olivia Stone", selected: false },
    { id: "new-18", name: "Paul Taylor", selected: false },
    { id: "new-19", name: "Quinn Underwood", selected: false },
    { id: "new-20", name: "Rita Verma", selected: false },
  ]);
  const [groupName, setGroupName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [groupNameModalVisible, setGroupNameModalVisible] = useState(false);
  const [currentlySwiped, setCurrentlySwiped] = useState(null);
  const swipeableRefs = useRef([]);

  const handleRemoveMember = (id) => {
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== id)
    );
  };

  const handleAddMembers = () => {
    const selectedMembers = newMembers.filter((member) => member.selected);
    setMembers((prevMembers) => [
      ...prevMembers,
      ...selectedMembers.filter(
        (newMember) => !prevMembers.some((member) => member.id === newMember.id)
      ),
    ]);
  };

  const handleUpdateGroupName = (newName) => {
    setGroupName(newName);
    setGroupNameModalVisible(false);
  };

  const renderMemberItem = ({ item, index }) => {
    const rightSwipeActions = () => (
      <TouchableOpacity
        style={styles.rightSwipeButton}
        onPress={() => handleRemoveMember(item.id)}
      >
        <AntDesign name="closecircle" size={20} color="#fff" />
      </TouchableOpacity>
    );

    return (
      <Swipeable
        ref={(ref) => (swipeableRefs.current[index] = ref)}
        renderRightActions={rightSwipeActions}
        onSwipeableWillOpen={() => {
          if (currentlySwiped !== null && currentlySwiped !== index) {
            swipeableRefs.current[currentlySwiped]?.close();
          }
          setCurrentlySwiped(index);
        }}
        onSwipeableClose={() => {
          if (currentlySwiped === index) {
            setCurrentlySwiped(null);
          }
        }}
      >
        <View style={styles.memberItem}>
          <View
            style={[styles.circle, { backgroundColor: getRandomColor() }]}
          />
          <Text style={styles.memberName}>{item.name}</Text>
        </View>
      </Swipeable>
    );
  };

  const getRandomColor = () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Group Settings</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{groupName}</Text>
        <View style={styles.editButtons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setGroupNameModalVisible(true)}
          >
            <AntDesign name="edit" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <AntDesign name="delete" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.membersList}>
        <FlatList
          data={members}
          renderItem={renderMemberItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.addMemberContainer}>
        <TouchableOpacity
          style={styles.addMemberButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addMemberButtonText}>Add Members</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Members</Text>
              <View style={styles.modalListContainer}>
                <FlatList
                  data={newMembers}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.modalMemberItem}
                      onPress={() => {
                        setNewMembers((prevMembers) =>
                          prevMembers.map((member) =>
                            member.id === item.id
                              ? { ...member, selected: !member.selected }
                              : member
                          )
                        );
                      }}
                    >
                      <Text style={styles.modalMemberName}>{item.name}</Text>
                      <AntDesign
                        name={item.selected ? "checkcircle" : "checkcircleo"}
                        size={20}
                        color={item.selected ? "green" : "gray"}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.addButton]}
                  onPress={() => {
                    handleAddMembers();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={groupNameModalVisible}
        onRequestClose={() => setGroupNameModalVisible(false)}
      >
        <TouchableWithoutFeedback
          onPress={() => setGroupNameModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Update Group Name</Text>
              <View style={styles.modalInputContainer}>
                <TextInput
                  style={styles.modalTextInput}
                  placeholder="Enter new group name"
                  value={groupName}
                  onChangeText={setGroupName}
                />
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setGroupNameModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.addButton]}
                  onPress={() => handleUpdateGroupName(groupName)}
                >
                  <Text style={styles.modalButtonText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
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
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  notificationButton: {
    marginLeft: "auto",
  },
  groupInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  groupName: {
    flex: 1,
    fontSize: 18,
  },
  editButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
  membersList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 15,
  },
  memberName: {
    flex: 1,
    fontSize: 16,
  },
  rightSwipeButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "100%",
    borderRadius: 8,
  },
  addMemberContainer: {
    padding: 15,
    backgroundColor: "#fff",
  },
  addMemberButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addMemberButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingBottom: 80, // Ensure padding for buttons
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 10,
  },
  modalListContainer: {
    maxHeight: Dimensions.get("window").height * 0.6, // Limit height
  },
  modalMemberItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalMemberName: {
    fontSize: 16,
  },
  modalButtons: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    marginBottom: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalInputContainer: {
    padding: 15,
  },
  modalTextInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default GroupSettings;
