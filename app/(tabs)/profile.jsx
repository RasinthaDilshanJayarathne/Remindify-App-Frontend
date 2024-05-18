import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          {/* <Text style={styles.headerText}>Profile</Text> */}
          <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
          <TouchableOpacity>
            <Ionicons name="share-social" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.profileImage}
          />

          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate("EditProfileScreen")}
          >
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuHeader}>Mimi Headline</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Popular</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Trending</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Today</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuHeader}>Content</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Favourite</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Download</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuHeader}>Preferences</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Language</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Darkmode</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Only Download via Wifi</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    height: 100,
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
  welcomeText: {
    fontSize: 15,
    marginTop: 40,
    marginRight: 100,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  editProfileButton: {
    backgroundColor: "#0095C3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: "white",
    fontSize: 16,
  },
  menuSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
