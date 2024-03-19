import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Settings from "../screens/settings";
import Bag from "../screens/bag";
import Account from "../screens/account";
import SignInScreen from "../screens/signin";
import SignUpScreen from "../screens/signup";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
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

export const AccountStack = () => {
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
