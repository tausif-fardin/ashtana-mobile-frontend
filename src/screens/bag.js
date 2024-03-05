import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import BagItemCard from "../components/bag-item-card";

function Bag() {
  const sheetRef = useRef(null);
  const [isDeleteSheetVisible, setIsDeleteSheetVisible] = useState(false);
  const snapPoints = ["50%"];

  const toggleDeleteSheetVisibility = () => {
    setIsDeleteSheetVisible(!isDeleteSheetVisible);
  };

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleConfirmDelete = () => {
    console.log("Item deleted");
    setIsDeleteSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <BagItemCard toggleDeleteSheetVisibility={toggleDeleteSheetVisibility} />

      {isDeleteSheetVisible && (
        <BottomSheet
          ref={sheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          style={{
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderRadius: 15,
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.confirmationText}>Remove From Cart</Text>
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/categories/women-category.jpeg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  Product Name
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>$20.00</Text>
                <Text style={{ fontWeight: "400", fontSize: 14, marginTop: 4 }}>
                  Size: Medium
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 14 }}>
                  Color: Red
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={handleConfirmDelete}
              >
                <Text style={styles.buttonText}>Yes Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setIsDeleteSheetVisible(false)}
              >
                <Text style={styles.buttonText2}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    flex: 1, // Take up 30% of the width
  },
  confirmationText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16,
    borderWidth: 1,
  },
  confirmButton: {
    backgroundColor: "black",
  },
  cancelButton: {
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
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
    flex: 5, // Take up 70% of the width
    justifyContent: "center", // Center the text vertically
    paddingLeft: 10, // Add some padding to separate the text from the image
    marginLeft: 6,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    width: "90%",
    height: 140, // Adjust height as needed
    padding: 4,
  },
});

export default Bag;
