import { View, Text, Image, TouchableOpacity } from "react-native";

const Banner = (props) => {
  return (
    <View
      style={[
        { width: props.width || "auto", height: props.height || "auto" },
        !props.hero && { padding: 10 },
      ]}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: props.image }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 14,
          }}
        />
        <View>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              backgroundColor: "#EEEEEE",
              borderRadius: 10,
              padding: 10,
            }}
            onPress={() => console.log("Shop now pressed")}
          >
            <Text style={{ fontWeight: "600" }}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              backgroundColor: "#EEEEEE",
              borderRadius: 10,
              padding: 10,
            }}
            onPress={() => console.log("Discover more pressed")}
          >
            <Text style={{ fontWeight: "600" }}>DISCOVER MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Banner;
