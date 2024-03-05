import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function BagItemCard({ toggleDeleteSheetVisibility }) {
  const [isDeleteSheetVisible, setIsDeleteSheetVisible] = useState(false);

  const [count, setCount] = useState(1);
  const price = 20.0;

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleDeleteConfirmation = () => {
    console.log("Item deleted");
    setIsDeleteSheetVisible(false);
  };

  const handleDeletePress = () => {
    setIsDeleteSheetVisible(true);
    toggleDeleteSheetVisibility(isDeleteSheetVisible);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/categories/women-category.jpeg")}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 4,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Product Name</Text>
          <TouchableOpacity onPress={handleDeletePress}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>$20.00</Text>
        <Text style={{ fontWeight: "400", fontSize: 14, marginTop: 4 }}>
          Size: Medium
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 14 }}>Color: Red</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 16,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementCount}>
              <Feather name="minus-square" size={26} color="#CCCCCC" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10 }}>{count}</Text>
            <TouchableOpacity onPress={incrementCount}>
              <Feather name="plus-square" size={26} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              ${(price * count).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "white",
    width: "90%",
    height: 140, // Adjust height as needed
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageContainer: {
    flex: 4, // Take up 30% of the width
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 6, // Take up 70% of the width
    justifyContent: "start", // Center the text vertically
    paddingLeft: 10, // Add some padding to separate the text from the image
  },
});
export default BagItemCard;
