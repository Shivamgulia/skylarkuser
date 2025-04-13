import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login } from "../lib/user";
import { APIContext } from "../store/apiContext";
import { AuthContext } from "../store/authContext";

const { width } = Dimensions.get("window");

export default function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const apiCtx = useContext(APIContext);
  const authCtx = useContext(AuthContext);

  function navigateNext() {
    navigation.navigate("Mobile");
  }

  async function LoginFormSumit() {
    const res = await login({
      apiBasePath: apiCtx.BaseAPIPath,
      data: { email: email, password: password },
    });

    if (!res.success) {
      setError(true);
      return;
    }
    setError(false);
    // login

    authCtx.login({ token: res.data.token, user: res.data.user });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Enter Your Details Below</Text>
          </View>

          <View style={styles.form}>
            <Text style={{ color: "red", textAlign: "center" }}>
              Invalid Credentials
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.signInButton}
              onPress={navigateNext}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/logos/google.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/logos/facebook.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
  },
  form: {
    marginTop: 40,
  },
  input: {
    backgroundColor: "#1A1A1A",
    color: "#FFF",
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: "#9089ED",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    elevation: 3,
    shadowColor: "#9089ED",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 12,
  },
  linkText: {
    color: "#9089ED",
    fontSize: 14,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#333",
  },
  separatorText: {
    color: "#666",
    paddingHorizontal: 12,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    maxWidth: (width - 64) / 2,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  socialButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
