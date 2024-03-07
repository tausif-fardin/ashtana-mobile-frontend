import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import s from "../styles/mainStyle.js";

const ProductMini = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [optionColors, setOptionColors] = useState([]);

  useEffect(() => {
    // Generate random colors for options
    const colors = Array.from({ length: 4 }, () => getRandomColor());
    setOptionColors(colors);
  }, []);

  const getRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  };

  const renderTitle = () => {
    const { title } = props.product;
    return (
      <Text style={styles.productTitle}>
        {title.length > 20 ? `${title.substring(0, 18)}..` : title}
      </Text>
    );
  };

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <View style={[styles.container, props.productStyle]}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.vrIcon}>
          <FontAwesome6 name="vr-cardboard" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: props.product.image }} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon} onPress={toggleLike}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        {renderTitle()}
        <View style={styles.optionsContainer}>
          {optionColors.map((color, index) => (
            <View
              key={index}
              style={[styles.option, { backgroundColor: color }]}
            />
          ))}
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.size}>M</Text>
          <Text style={styles.size}>L</Text>
          <Text style={styles.size}>XL</Text>
          <Text style={styles.size}>XXL</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{props.product.price || "140$"}</Text>
          <Text>({props.product.discount || "30%"} Discount)</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    minHeight: 100,
    marginLeft: 10,
    marginRight: 10,
    padding: 4,
  },
  imageContainer: {
    width: 150,
    height: 200,
    position: "relative",
    borderWidth: 2,
    padding: 10,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  vrIcon: {
    position: "absolute",
    top: "50%",
    left: -15,
    transform: [{ translateY: -6 }],
    backgroundColor: "transparent",
    borderRadius: 6,
    paddingHorizontal: 2,
    borderWidth: 1,
    borderColor: "black",
    zIndex: 1,
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 2,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  productTitle: {
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 10,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  option: {
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 14,
  },
  sizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  size: {
    fontWeight: "500",
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
  priceContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 2,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  btn: {
    alignSelf: "center",
    paddingHorizontal: 6,
    height: 30,
    borderWidth: 2,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  btnText: {
    fontWeight: "500",
    color: "black",
  },
});

export default ProductMini;
