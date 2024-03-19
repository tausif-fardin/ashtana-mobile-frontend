import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Settings from "../screens/settings";
import Wishlist from "../screens/wishlist";

import { MyStack } from "./StackNavigator";
import { AccountStack } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
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
            <MaterialCommunityIcons name="menu" size={24} color={color} />
          ),
          title: "Menu",
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
          title: "Favorite",
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
          title: "User",
        }}
      />
    </Tab.Navigator>
  );
};
