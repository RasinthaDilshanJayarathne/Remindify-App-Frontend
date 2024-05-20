import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
          <TouchableOpacity>
            <Ionicons name="share-social" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.profileImage}
          />
          <TouchableOpacity>
            <Text style={styles.changePictureText}>Change Picture</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
          />
          <TextInput style={styles.input} placeholder="Enter user name" />
          <TextInput style={styles.input} placeholder="Enter birthday" />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
          <TextInput style={styles.input} placeholder="Organization" />
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0095C3",
    padding: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePictureText: {
    color: "#0095C3",
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0095C3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 15,
    fontWeight: "Regular",
    color: "#737373",
  },
  updateButton: {
    backgroundColor: "#0095C3",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    height: 60,
  },
  updateButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
