import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const navigation = useNavigation();

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  function navigateNext() {
    navigation.navigate("Base");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>
              We've sent a 4-digit code to your mobile number
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                style={[styles.otpInput, otp[index] && styles.filledOtp]}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleChange(index, text)}
                ref={(ref) => (inputs.current[index] = ref)}
                selectionColor="#9089ED"
                autoFocus={index === 0}
              />
            ))}
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code?</Text>
            <TouchableOpacity>
              <Text style={styles.resendButton}>Resend Code</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={navigateNext}
            activeOpacity={0.9}
          >
            <Text style={styles.buttonText}>Verify & Continue</Text>
          </TouchableOpacity>
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
    justifyContent: "center",
  },
  header: {
    marginTop: 40,
    marginBottom: 48,
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  otpInput: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#1A1A1A",
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  filledOtp: {
    borderColor: "#9089ED",
    backgroundColor: "#1A1A1A",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  resendText: {
    color: "#888",
    fontSize: 14,
  },
  resendButton: {
    color: "#9089ED",
    fontSize: 14,
    fontWeight: "500",
  },
  submitButton: {
    backgroundColor: "#9089ED",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
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
});