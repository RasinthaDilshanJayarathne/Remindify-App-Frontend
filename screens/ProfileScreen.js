import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PortfolioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="#000" style={styles.icon} />
          <Icon name="notifications" size={24} color="#000" />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sections}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mimi Headline</Text>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Today</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content</Text>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Download</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Darkmode</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Only Download via Wifi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    backgroundColor: "#fff",
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
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 40,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  sections: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionItem: {
    fontSize: 14,
    paddingVertical: 5,
  },
});

export default PortfolioScreen;
