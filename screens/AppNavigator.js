import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import TabNavigator from "./TabNavigator";
import EditProfileScreen from "./EditProfileScreen";
import GroupSettings from "./GroupSettings";
import ViewGroup from "./ViewGroup";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewGroup"
        component={ViewGroup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GroupSettings"
        component={GroupSettings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
