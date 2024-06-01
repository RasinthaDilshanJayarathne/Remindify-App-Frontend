import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Login Account</Text>
          <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
        </View>
      </View>

      {/* <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maecenas
        quis interdum enim enim molestie faucibus. Pretium non non massa eros,
        nunc, urna. Ac laoreet sagittis donec vel. Amet, duis justo, quam
        quisque egestas. Quam enim at dictum condimentum. Suspendisse.
      </Text> */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          keyboardOpen && styles.keyboardOpen,
        ]}
      >
        <View style={styles.formContainer}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            maecenas quis interdum enim enim molestie faucibus. Pretium non non
            massa eros, nunc, urna. Ac laoreet sagittis donec vel. Amet, duis
            justo, quam quisque egestas. Quam enim at dictum condimentum.
            Suspendisse.
          </Text>
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
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>
            Im already an account.{" "}
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
  imageLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 50,
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
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
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
});

export default RegisterScreen;
