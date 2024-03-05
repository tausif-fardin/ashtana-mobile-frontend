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
            <Image source={category.imageSource} style={styles.tinyImage} />
            <Text style={styles.imageTitle}>{category.title}</Text>
          </View>
        ))}
    </View>
  );
}

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
  tinyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    resizeMode: "stretch",
  },
  imageTitle: {
    textAlign: "center",
    fontWeight: "500",
  },
  cartIcon: {
    textAlign: "center",
  },
});
