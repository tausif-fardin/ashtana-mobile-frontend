import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Account;
