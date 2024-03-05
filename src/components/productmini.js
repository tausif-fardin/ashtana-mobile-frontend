import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Linking,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import s from "../styles/mainStyle.js";

const ProductMini = (props) => {
  useEffect(() => {}, []);
  return (
    <View
      style={[
        {
          width: props.width || "auto",
          height: props.height || "auto",
          minHeight: 100,
        },
        !props.vertical && {
          marginLeft: 10,
          marginRight: 10,
          padding: 4,
        },
        props.productStyle,
      ]}
    >
      <View style={{ flex: 1 }}>
        <View style={[s.textCenter]}>
          <Image
            source={{ uri: props.product.image }}
            style={{
              width: "100%",
              height: props.productimgheight || 120,
              resizeMode: props.productimgresizemode || "contain",
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={[props.productTitleStyle || s.f15]}>
          {props.product.title.length > 20
            ? props.product.title.substring(0, 18) + ".."
            : props.product.title}
        </Text>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderWidth: 2,
              borderRadius: 14,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "green",
              paddingHorizontal: 12,
              paddingVertical: 8,

              borderWidth: 2,
              borderRadius: 14,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "yellow",
              paddingHorizontal: 12,
              paddingVertical: 8,

              borderWidth: 2,
              borderRadius: 14,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "black",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderWidth: 2,
              borderRadius: 14,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Text style={styles.size}>M</Text>
          <Text style={styles.size}>L</Text>
          <Text style={styles.size}>XL</Text>
          <Text style={styles.size}>XXL</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 }}>
            {props.product.price || "140$"}
          </Text>
          <Text>({props.product.discount || "30%"} Discount)</Text>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontWeight: "500", color: "white" }}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 35,
    borderRadius: 14,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.2,
    elevation: 3,
    marginTop: 4,
  },
  card: {
    border: 1,
  },
  size: {
    fontWeight: "500",
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default ProductMini;
