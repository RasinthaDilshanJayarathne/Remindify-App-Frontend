import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const TextSummarizeScreen = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    Alert.alert(
      "Upload Photo",
      "Choose an option",
      [
        {
          text: "Take Photo",
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 1,
            });
            console.log("Camera result:", result);
            if (!result.cancelled) {
              setPhoto(result.uri);
              if (
                result.assets &&
                result.assets.length > 0 &&
                result.assets[0].uri
              ) {
                console.log("Photo URI (Camera):", result.assets[0].uri);
              } else {
                console.log("Photo URI (Camera):", "URI not found in result");
              }
            }
          },
        },
        {
          text: "Choose from Gallery",
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 1,
            });
            console.log("Gallery result:", result);
            if (!result.cancelled) {
              setPhoto(result.uri);
              console.log("Photo URI (Gallery):", result.uri);
            }
          },
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const handleSummarizeText = () => {
    Alert.alert("Summarize Text", "Functionality to be implemented");
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
          <Text style={styles.headerTitle}>Text Summarizing</Text>
          <View style={styles.headerIcons}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.greetingText}>Welcome back Reminder App!</Text>
          <TouchableOpacity
            style={styles.takePhotoButton}
            onPress={handleTakePhoto}
          >
            <Text style={styles.takePhotoButtonText}>TAKE PHOTO</Text>
          </TouchableOpacity>
          <View style={styles.imageBox}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.photo} />
            ) : (
              <Text style={styles.imagePlaceholder}>
                Image will be displayed here
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.summarizeButton}
            onPress={handleSummarizeText}
          >
            <Text style={styles.summarizeButtonText}>Summarize Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>GEN REMINDER / SAVE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
  takePhotoButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40,
  },
  takePhotoButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageBox: {
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  imagePlaceholder: {
    color: "#aaa",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  summarizeButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40,
  },
  summarizeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  saveButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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

export default TextSummarizeScreen;
