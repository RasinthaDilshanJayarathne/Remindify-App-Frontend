import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Import your screen components
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import PortfolioScreen from "./PortfolioScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const CenterTab = ({ children, onPress }) => (
  <TouchableOpacity style={styles.centerTab} onPress={onPress}>
    <View style={styles.centerTabIcon}>{children}</View>
  </TouchableOpacity>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home-outline";
        } else if (route.name === "Explore") {
          iconName = "compass-outline";
        } else if (route.name === "Portfolio") {
          iconName = "briefcase-outline";
        } else if (route.name === "Profile") {
          iconName = "person-outline";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    })}
    tabBarOptions={{
      activeTintColor: "#1DA1F2",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    {/* <Tab.Screen name="Explore" component={HomeScreen} /> */}
    <Tab.Screen
      name="Center"
      component={() => null}
      options={{
        tabBarButton: (props) => <CenterTab {...props} />,
        tabBarIcon: ({ color, size }) => (
          <Icon name="rocket-outline" color="#ffffff" size={size} />
        ),
      }}
    />
    <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 90,
    ...{
      shadowColor: "#7F5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  },
  centerTab: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    ...{
      shadowColor: "#7F5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  },
  centerTabIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
