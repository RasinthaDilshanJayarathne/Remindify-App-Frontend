import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as Permissions from "expo-permissions";

const RegisterScreen = ({ navigation }) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [birthday, setBirthday] = useState("");
  const [birthdayError, setBirthdayError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError("Username is required");
      return false;
    }
    setUsernameError(null);
    return true;
  };

  const validateBirthday = () => {
    if (!birthday) {
      setBirthdayError("Birthday is required");
      return false;
    }
    setBirthdayError(null);
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleRegister = async () => {
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();
    const isBirthdayValid = validateBirthday();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isUsernameValid && isBirthdayValid && isPasswordValid) {
      try {
        console.log("Email:", email);
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Birthday:", birthday);
        console.log("Profile Image:", profileImage);

        const response = await fetch("http://192.168.43.217:6060/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
            birthday,
            image: profileImage, // Ensure this is correctly named
          }),
        });

        const data = await response.json();

        if (response.ok) {
          Alert.alert("Success", "User registered successfully");
          navigation.navigate("Login");
        } else {
          Alert.alert("Error", data.message || "Registration failed");
        }
      } catch (error) {
        console.error("Error:", error);
        Alert.alert("Error", "Network request failed");
      }
    } else {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields correctly"
      );
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthday(moment(date).format("YYYY-MM-DD"));
    hideDatePicker();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image Picker Result:", result);

    if (!result.cancelled) {
      const uri = result.assets[0].uri;
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setProfileImage(`data:image/jpeg;base64,${base64}`);
      console.log("Profile Image Base64:", `data:image/jpeg;base64,${base64}`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Register Account</Text>
          <Text style={styles.welcomeText}>Welcome to Reminder App!</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          keyboardOpen && styles.keyboardOpen,
        ]}
      >
        <View style={styles.formContainer}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Ionicons name="camera" size={50} color="gray" />
              </View>
            )}
            <TouchableOpacity
              style={styles.cameraIconContainer}
              onPress={pickImage}
            >
              <Ionicons name="camera" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={[styles.input, emailError && styles.inputError]}
            placeholder="Enter email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            onBlur={validateEmail}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <TextInput
            style={[styles.input, usernameError && styles.inputError]}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            onBlur={validateUsername}
          />
          {usernameError && (
            <Text style={styles.errorText}>{usernameError}</Text>
          )}
          <TouchableOpacity
            style={[
              styles.input,
              styles.birthdayInput,
              birthdayError && styles.inputError,
            ]}
            onPress={showDatePicker}
          >
            <Text style={birthday ? {} : styles.placeholderText}>
              {birthday
                ? moment(birthday).format("MMMM D, YYYY")
                : "Select birthday"}
            </Text>
          </TouchableOpacity>
          {birthdayError && (
            <Text style={styles.errorText}>{birthdayError}</Text>
          )}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TextInput
            style={[styles.input, passwordError && styles.inputError]}
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onBlur={validatePassword}
          />
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>
            Already have an account?{" "}
            <Text
              style={styles.createAccountLink}
              onPress={() => navigation.navigate("Login")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  headerTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  keyboardOpen: {
    justifyContent: "flex-start",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1DA1F2",
    borderRadius: 20,
    padding: 5,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  birthdayInput: {
    justifyContent: "center",
  },
  placeholderText: {
    color: "#888",
  },
  createAccountText: {
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  createAccountLink: {
    color: "#1DA1F2",
    fontWeight: "bold",
  },
  registerButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
  },
});

export default RegisterScreen;
