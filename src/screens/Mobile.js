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
  ScrollView,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

export default function Mobile() {
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [number, setNumber] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const navigation = useNavigation();

  function navigateNext() {
    navigation.navigate("OTP");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Your Phone Number</Text>
              <Text style={styles.subtitle}>We'll send you a verification code</Text>
            </View>

            <View style={styles.form}>
              <Pressable
                style={styles.countryCodeInput}
                onPress={() => {/* Add country code picker logic */}}
              >
                <Text style={styles.countryCodeText}>{countryCode}</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
              </Pressable>

              <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                keyboardType="phone-pad"
                placeholder="Phone Number"
                placeholderTextColor="#888"
                autoCompleteType="tel"
              />

              <View style={styles.checkboxContainer}>
                <Pressable
                  style={styles.checkboxRow}
                  onPress={() => setCheck1(!check1)}
                >
                  <View style={[styles.checkbox, check1 && styles.checkedBox]}>
                    {check1 && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.checkboxText}>
                    I agree to the Terms and Conditions of service
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.checkboxRow}
                  onPress={() => setCheck2(!check2)}
                >
                  <View style={[styles.checkbox, check2 && styles.checkedBox]}>
                    {check2 && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.checkboxText}>
                    I agree to the Privacy Policy and Data Processing
                  </Text>
                </Pressable>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.nextButton, (!check1 || !check2) && styles.disabledButton]}
              onPress={navigateNext}
              disabled={!check1 || !check2}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    justifyContent: "center",
  },
  header: {
    marginTop: 40,
    marginBottom: 32,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    marginTop: 24,
  },
  countryCodeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  countryCodeText: {
    color: '#FFF',
    fontSize: 16,
  },
  dropdownIcon: {
    color: '#888',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  checkboxContainer: {
    marginTop: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#9089ED',
    borderColor: '#9089ED',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    flex: 1,
    color: '#FFF',
    fontSize: 14,
    lineHeight: 20,
  },
  nextButton: {
    backgroundColor: '#9089ED',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    elevation: 3,
    shadowColor: '#9089ED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});