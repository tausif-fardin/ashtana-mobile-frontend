import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import s from "../styles/mainStyle";

const { width, height } = Dimensions.get("window");

export default function Header(props) {
  const navigation = useNavigation();

  const goToBagScreen = () => {
    navigation.navigate("Bag");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/ashtana_logo.png")}
          style={styles.tinyLogo}
        />
      </View>
      <View
        style={[
          {
            width: width / 2,
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#d4d4d4",
            borderRadius: 14,
            height: 40,
          },
        ]}
      >
        <View style={[s.row, s.pd10]}>
          <Text>
            <Icon name="search-outline" size={18} />
          </Text>
          <TextInput
            placeholder="Search for products"
            style={[s.fl1, s.pdlt10, s.f14]}
          />
        </View>
      </View>
      <View style={[s.fl1]}>
        <TouchableOpacity onPress={goToBagScreen}>
          <Text style={styles.cartIcon}>
            <Icon name="bag" size={30} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  tinyLogo: {
    width: 100,
    height: 40,
    resizeMode: "stretch",
  },
  cartIcon: {
    textAlign: "center",
  },
});
