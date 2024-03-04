import React from "react";
import { Text, StyleSheet } from "react-native";

function Home() {
  return <Text style={styles.container}>Home Page</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
