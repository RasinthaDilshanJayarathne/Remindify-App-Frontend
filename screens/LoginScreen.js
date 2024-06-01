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

const exploreImage = require("../assets/logo.png");
const logoSl = require("../assets/srilanka_logo.png");

const LoginScreen = ({ navigation }) => {
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
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          keyboardOpen && styles.keyboardOpen,
        ]}
      >
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Login Account</Text>
            <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
          </View>
          <Image source={logoSl} style={styles.imageLogo} />
        </View>

        <View style={styles.logoContainer}>
          <Image source={exploreImage} style={styles.image} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forget Password ?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.createAccountText}>
          Not registered yet?{" "}
          <Text
            style={styles.createAccountLink}
            onPress={() => navigation.navigate("Register")}
          >
            Create Account
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    position: "absolute",
    top: 50,
    paddingHorizontal: 10,
    zIndex: 1,
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
  flag: {
    width: 40,
    height: 25,
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
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
  forgotPassword: {
    textAlign: "right",
    color: "#1DA1F2",
    width: "100%",
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountText: {
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: -30,
  },
  imageLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  createAccountLink: {
    color: "#1DA1F2",
    fontWeight: "bold",
  },
});

export default LoginScreen;
