import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Header(props) {
  const navigation = useNavigation();

  const goToBagScreen = () => {
    navigation.navigate("Bag");
  };
  const goToSigninScreen = () => {
    navigation.navigate("SignInFromHome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
        <TextInput
          placeholder="Explore"
          placeholderTextColor="#000000"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>English</Text>
      </View>
      <TouchableOpacity onPress={goToSigninScreen} style={styles.iconContainer}>
        <AntDesign name="user" size={24} color="black" />
        <Text style={styles.iconText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToBagScreen} style={styles.iconContainer}>
        <AntDesign name="hearto" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToBagScreen} style={styles.iconContainer}>
        <Ionicons name="bag-handle-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 6,
    gap: 10,
  },
  searchContainer: {
    width: width / 3,
    borderBottomWidth: 2,
    borderColor: "#000000",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
  searchInput: {
    flex: 1,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 12,
  },
  languageContainer: {
    borderWidth: 2,
    borderRadius: 4,
    padding: 2,
  },
  languageText: {
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    fontWeight: "500",
  },
});
