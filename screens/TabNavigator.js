import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AddReminderScreen from "./AddReminderScreen";
import ShowRemindersScreen from "./ShowRemindersScreen";
import TextSummarizeScreen from "./TextSummarizeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home-outline";
        } else if (route.name === "AddReminder") {
          iconName = "book-outline";
        } else if (route.name === "ShowReminders") {
          iconName = "time-outline";
        } else if (route.name === "Profile") {
          iconName = "person-outline";
        } else if (route.name === "textSummarizeScreen ") {
          iconName = "person-outline";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
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
    <Tab.Screen
      name="ShowReminders"
      component={ShowRemindersScreen}
      options={{
        headerShown: false,
        tabBarLabel: () => null,
      }}
    />
    <Tab.Screen
      name="textSummarizeScreen"
      component={TextSummarizeScreen}
      options={{
        headerShown: false,
        tabBarLabel: () => null,
      }}
    />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
