import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (email === "user@example.com" && password === "password") {
      navigation.navigate("Home");
    } else {
      alert("Invalid email or password");
    }
  };
  const handleRegister = async () => {
    navigation.navigate("SignUpFromHome");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <Image
          source={require("../../assets/ashtana_logo.png")}
          style={styles.tinyLogo}
        />
      </View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true} // Mask password characters
      />
      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Register"
        onPress={handleRegister}
        style={{ marginTop: 20 }}
      >
        <Text
          style={{
            color: "#404040",
            fontSize: 14,
            fontWeight: "400",
            alignSelf: "center",
            textDecorationLine: "underline",
          }}
        >
          Forgot password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Register"
        onPress={handleRegister}
        style={{ marginTop: 20 }}
      >
        <Text
          style={{
            color: "#404040",
            fontSize: 14,
            fontWeight: "400",
            alignSelf: "center",
            textDecorationLine: "underline",
          }}
        >
          Don't have an account?
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  tinyLogo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#bfbfbf",
    borderRadius: 5,
    color: "#000000",
  },
  button: {
    width: "80%",
    paddingVertical: 14,
    backgroundColor: "#000000",
    borderRadius: 10,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  forgotPassword: {
    marginTop: 20,
    color: "#fff",
  },
});

export default SignInScreen;
