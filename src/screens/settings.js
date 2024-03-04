import React from "react";
import { Text, StyleSheet } from "react-native";

function Settings() {
  return <Text style={styles.container}>Settings Page</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
