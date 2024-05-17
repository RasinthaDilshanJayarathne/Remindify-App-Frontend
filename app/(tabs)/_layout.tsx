import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import Home from "./home";
import Category from "./category";
import Search from "./search";
import Bookmark from "./bookmark";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

export default function _layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.iconColor,
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primaryColor : "transparent",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: focused ? 10 : 0,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="home"
                size={28}
                color={focused ? Colors.white : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="category"
        component={Category}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primaryColor : "transparent",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: focused ? 10 : 0,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="space-dashboard"
                size={28}
                color={focused ? Colors.white : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primaryColor : "transparent",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: focused ? 10 : 0,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="search"
                size={24}
                color={focused ? Colors.white : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primaryColor : "transparent",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: focused ? 10 : 0,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="bookmark"
                size={20.5}
                color={focused ? Colors.white : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primaryColor : "transparent",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: focused ? 10 : 0,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="user"
                size={28}
                color={focused ? Colors.white : color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
