import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
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
