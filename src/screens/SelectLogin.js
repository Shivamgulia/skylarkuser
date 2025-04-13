import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import React from "react";

import topImage from "../../assets/signup.jpg";
import { useNavigation } from "@react-navigation/native";
import EmailLogin from "./EmailLogin";

export default function SelectLogin() {
  const navigation = useNavigation();

  function goToEmailLogin() {
    navigation.navigate("EmailLogin");
  }

  return (
    <ImageBackground source={topImage} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.overlay}>
        <View style={styles.centerContent}>
          <View style={styles.headCont}>
            <Text style={styles.whiteHead}>Track Your</Text>
            <Text style={styles.purpleHead}>Fitness</Text>
            <Text style={styles.whiteHead}>Journey</Text>
          </View>

          <View style={styles.buttonCont}>
            <Pressable style={styles.button} onPress={goToEmailLogin}>
              <Text style={styles.text}>Continue With Email</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goToEmailLogin}>
              <Text style={styles.text}>Continue With Google</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goToEmailLogin}>
              <Text style={styles.text}>Continue With Apple</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Optional: dim background
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headCont: {
    marginBottom: 40,
    alignItems: 'center',
  },
  whiteHead: {
    color: "white",
    fontSize: 50,
    fontWeight: 'bold',
  },
  purpleHead: {
    color: "#9089ed",
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonCont: {
    gap: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "white",
    width: 300,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
  },
  text: {
    fontWeight: '600',
  },
  
});
