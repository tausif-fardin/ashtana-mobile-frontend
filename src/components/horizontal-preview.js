import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import s from "../styles/mainStyle.js";
import ProductMini from "./productmini";

const Preview = (props) => {
  return (
    <View style={[s.fl1, s.pdtp20, s.pdlt10, s.mgbt20]}>
      <View style={{ alignSelf: "flex-start" }}>
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
  title: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    fontSize: 18,
    fontWeight: "700",
    borderWidth: 1,
    borderRadius: 16,
  },
});

export default Preview;
