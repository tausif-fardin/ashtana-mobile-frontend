import React from "react";
import { View, ScrollView, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const trending = [
  {
    imageSource: require("../../assets/trends/Sale_1.png"),
  },
  {
    imageSource: require("../../assets/trends/WinterSales.png"),
  },
  {
    imageSource: require("../../assets/trends/Sale_2.png"),
  },
  {
    imageSource: require("../../assets/trends/Sale_3.png"),
  },
];

const TrendingCard = ({ imageSource, title }) => (
  <View style={styles.subContainer}>
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.tinyImage} resizeMode="cover" />
    </View>
  </View>
);

function TrendingSection() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {trending.map((category, index) => (
          <TrendingCard key={index} {...category} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#7f7f7f",
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width / 3,
    height: height / 5,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tinyImage: {
    flex: 1,
    height: height / 5,
    width: width / 3,
    borderRadius: 20,
  },
  imageTitle: {
    textAlign: "center",
    fontWeight: "500",
  },
});

export default TrendingSection;
