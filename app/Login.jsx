import React from "react";
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
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.loginHeader}>
              <Text style={styles.loginAccountText}>Login Account</Text>
              <FontAwesome name="user" size={30} style={styles.icon} />
            </View>
            <Image
              source={require("../assets/images/srilanka_logo.png")}
              style={styles.flag}
            />
          </View>
          <Text style={styles.welcomeText}>Welcome back Reminder App!</Text>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={styles.increasedGap}>
            <TextInput placeholder="Enter email id" style={styles.input} />
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.createAccountContainer}>
            <Text style={styles.notRegisteredText}>Not registered yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: 10,
  },
  loginHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginAccountText: {
    fontSize: 24,
    color: "#5B5B57",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
    color: "#5B5B57",
  },
  flag: {
    width: 70,
    height: 39,
    marginTop: 10,
  },
  logo: {
    width: 250,
    height: 150,
    marginTop: 100,
  },
  welcomeText: {
    fontSize: 16,
    color: "#5B5B57",
    marginTop: -5,
    marginRight: 140,
  },
  increasedGap: {
    marginTop: 70, // Adjust the value to control the gap size
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
    width: 320,
  },
  forgotPassword: {
    color: "#5B5B57",
    marginBottom: 20,
    fontWeight: "bold",
    marginLeft: 200,
    // fontSize: 15,
  },
  loginButton: {
    width: 320,
    height: 50,
    backgroundColor: "#1DA1F2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Added margin to separate it from the create account text
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  createAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  notRegisteredText: {
    fontSize: 14,
    color: "#737373",
  },
  createAccountText: {
    fontSize: 14,
    color: "#5B5B57",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
