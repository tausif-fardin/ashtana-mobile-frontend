import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  ScrollView,
} from "react-native";
import s from "../styles/mainStyle.js";
import ProductMini from "./productmini";
const { width, height } = Dimensions.get("window");
const Preview = (props) => {
  return (
    <View style={[s.fl1, s.pdtp20, s.mgbt20]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 25,
        }}
      >
        {props.products.map((data, index) => {
          return (
            <ProductMini
              key={index}
              width={props.width || "auto"}
              height={props.height || "auto"}
              productTitleStyle={props.productTitleStyle}
              productimgheight={props.productimgheight}
              productimgresizemode={props.productimgresizemode || "contain"}
              product={data}
            />
          );
        })}
      </ScrollView>
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
});

export default Preview;
