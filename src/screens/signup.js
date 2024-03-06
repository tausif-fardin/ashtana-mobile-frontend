import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    alert("Signup successful!");
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Create an account</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />
      <TouchableOpacity
        title="Sign Up"
        onPress={handleSignUp}
        style={styles.button}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Register"
        onPress={() => {
          navigation.goBack();
        }}
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
          Already have an account?
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 50,
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
});

export default SignUpScreen;
