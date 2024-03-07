import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";

import Home from "./src/screens/home";
import Settings from "./src/screens/settings";
import Bag from "./src/screens/bag";
import Wishlist from "./src/screens/wishlist";
import Account from "./src/screens/account";
import SignInScreen from "./src/screens/signin";
import SignUpScreen from "./src/screens/signup";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignInFromHome"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpFromHome"
        component={SignUpScreen}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Bag"
        component={Bag}
      />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Account"
        component={Account}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#7f7f7f",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "heart" : "heart-o"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              color={color}
              size={24}
            />
          ),
          title: "User Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
