import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AddReminderScreen from "./AddReminderScreen";
import ShowRemindersScreen from "./ShowRemindersScreen";
import TextSummarizeScreen from "./TextSummarizeScreen";
import AddMembersScreen from "./CreateGroupScreen";
import ViewGroup from "./ViewGroup";
import ViewAllGroups from "./ViewAllGroups";

const Tab = createBottomTabNavigator();

const CircularImage = ({ source, size }) => {
  return (
    <View
      style={[
        styles.iconContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Image
        source={source}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const TabNavigator = () => {
  const newImage = require("../assets/my.png");

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let customComponent;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "AddReminder") {
            iconName = "book-outline";
          } else if (route.name === "ShowReminders") {
            iconName = "time-outline";
          } else if (route.name === "ViewGroup") {
            // customComponent = <CircularImage source={newImage} size={size} />;
            iconName = "time-outline";
          } else if (route.name === "textSummarizeScreen") {
            iconName = "document-text-outline";
          } else if (route.name === "addMembersScreen") {
            iconName = "person-add-outline";
          } else if (route.name === "ViewAllGroups") {
            // customComponent = <CircularImage source={newImage} size={size} />;
            iconName = "time-outline";
          }

          return customComponent ? (
            customComponent
          ) : (
            <Icon name={iconName} size={size} color={color} />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          marginBottom: -15,
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1DA1F2",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="AddReminder"
        component={AddReminderScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      {/* <Tab.Screen
        name="ShowReminders"
        component={ShowRemindersScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      /> */}
      <Tab.Screen
        name="textSummarizeScreen"
        component={TextSummarizeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="addMembersScreen"
        component={AddMembersScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      {/* <Tab.Screen
        name="ViewGroup"
        component={ViewGroup}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      /> */}
      <Tab.Screen
        name="ViewAllGroups"
        component={ViewAllGroups}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
