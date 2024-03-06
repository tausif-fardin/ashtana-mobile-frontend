import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Account() {
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
