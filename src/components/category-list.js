import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const categories = [
  {
    imageSource: require("../../assets/categories/men-category.jpeg"),
    title: "Mens",
  },
  {
    imageSource: require("../../assets/categories/women-category.jpeg"),
    title: "Womens",
  },
  {
    imageSource: require("../../assets/categories/kids-category.jpeg"),
    title: "Kids",
  },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      {categories &&
        categories?.map((category, index) => (
          <View style={styles.subContainer} key={index}>
            <View style={styles.imageContainer}>
              <Image source={category.imageSource} style={styles.tinyImage} />
            </View>
            <Text style={styles.imageTitle}>{category.title}</Text>
          </View>
        ))}
    </View>
  );
}
const imageSize = 70;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 15,
  },
  subContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tinyImage: {
    width: 74,
    height: 74,
    borderRadius: 37,
    resizeMode: "stretch",
  },
  imageTitle: {
    textAlign: "center",
    fontWeight: "500",
  },
});
