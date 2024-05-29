import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create Account</Text>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.welcomeText}>Welcome to Reminder App!</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter full name" style={styles.input} />
            <TextInput placeholder="Enter email id" style={styles.input} />
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyRegisteredText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
  registerContainer: {
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
    color: "#5B5B57",
  },
  logo: {
    width: 250,
    height: 150,
    marginVertical: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0095C3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 15,
    color: "#737373",
    width: 320,
  },
  registerButton: {
    width: 320,
    height: 50,
    backgroundColor: "#1DA1F2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  alreadyRegisteredText: {
    fontSize: 14,
    color: "#737373",
  },
  loginText: {
    fontSize: 14,
    color: "#5B5B57",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
