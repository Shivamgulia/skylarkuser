import { Image, Pressable, StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Highlight the active tab
  const activeTab = route.name;

  // Animation for active tab
  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  const tabs = [
    { name: "Base", icon: require("../../../assets/homeimages/home.png"), label: "Home" },
    { name: "Performance", icon: require("../../../assets/homeimages/performance.png"), label: "Performance" },
    { name: "Classes", icon: require("../../../assets/homeimages/classicon.png"), label: "Classes" },
    { name: "Profile", icon: require("../../../assets/homeimages/user.png"), label: "Profile" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: "#66c9de" }]}>
      {tabs.map((tab, index) => (
        <Pressable
          key={index}
          style={styles.navItem}
          onPress={() => navigation.navigate(tab.name)}
        >
          <View style={styles.iconContainer}>
            <Image
              source={tab.icon}
              style={[
                styles.icon,
                activeTab === tab.name && styles.activeIcon,
              ]}
            />
            <Text
              style={[
                styles.label,
                activeTab === tab.name && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </View>
          {activeTab === tab.name && (
            <Animated.View
              style={[
                styles.activeIndicator,
                {
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    position: "relative",
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "#555",
  },
  activeIcon: {
    tintColor: "#fff",
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    color: "#555",
    fontWeight: "500",
  },
  activeLabel: {
    color: "#fff",
    fontWeight: "600",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 5,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
});