// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import TabNavigator from "./screens/TabNavigator";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={TabNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./screens/AppContext"; // Ensure this is the correct path
import AppNavigator from "./screens/AppNavigator";

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
