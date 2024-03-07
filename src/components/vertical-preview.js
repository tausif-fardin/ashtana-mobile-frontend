import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ProductMini from "./productmini";
import s from "../styles/mainStyle.js";

const { width } = Dimensions.get("window");

const VPreview = (props) => {
  const [visibleProducts, setVisibleProducts] = useState(6); // Initial visible products

  const renderProducts = () => {
    const products = props.products
      .slice(0, visibleProducts)
      .map((data, index) => (
        <ProductMini
          key={index}
          width={width / 2 - 20}
          height={props.height || "auto"}
          productTitleStyle={props.productTitleStyle}
          productimgheight={props.productimgheight}
          productimgresizemode={props.productimgresizemode || "contain"}
          product={data}
        />
      ));

    const rows = [];
    for (let i = 0; i < products.length; i += 2) {
      rows.push(
        <View key={i / 2} style={styles.row}>
          {products.slice(i, i + 2)}
        </View>
      );
    }
    return rows;
  };

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 6); // Load more 6 items
  };

  return (
    <View style={[s.fl1, s.pdtp20, s.mgbt20]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 25 }}
      >
        {renderProducts()}
      </ScrollView>
      <TouchableOpacity style={styles.showMoreButton} onPress={handleShowMore}>
        <Text style={styles.showMoreText}>Show More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    alignSelf: "flex-start",
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  showMoreButton: {
    alignSelf: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  showMoreText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default VPreview;
