import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Wishlist() {
  return (
    <View style={styles.container}>
      <Text>Wishlist screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Wishlist;
