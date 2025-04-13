import { Image, Pressable, StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [pressedTab, setPressedTab] = useState(null);
  const activeTab = route.name;

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  const tabs = [
    {
      name: "Base",
      iconOutline: require("../../../assets/homeimages/home-outline.png"),
      iconFilled: require("../../../assets/homeimages/home-filled.png"),
      label: "Home"
    },
    {
      name: "Performance",
      iconOutline: require("../../../assets/homeimages/performance-outline.png"),
      iconFilled: require("../../../assets/homeimages/performance-filled.png"),
      label: "Performance"
    },
    {
      name: "Classes",
      iconOutline: require("../../../assets/homeimages/classicon-outline.png"),
      iconFilled: require("../../../assets/homeimages/classicon-filled.png"),
      label: "Classes"
    },
    {
      name: "Profile",
      iconOutline: require("../../../assets/homeimages/user-outline.png"),
      iconFilled: require("../../../assets/homeimages/user-filled.png"),
      label: "Profile"
    },
  ];


  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.name;
        const isPressed = pressedTab === index;
        const showLabel = isActive || isPressed;

        return (
          <Pressable
            key={index}
            style={styles.navItem}
            android_ripple={{ color: 'rgba(0,0,0,0.1)', borderless: true }}
            accessibilityRole="button"
            accessibilityLabel={`Navigate to ${tab.label}`}
            onPressIn={() => setPressedTab(index)}
            onPressOut={() => setPressedTab(null)}
            onPress={() => navigation.navigate(tab.name)}
          >
            <View style={styles.iconContainer}>
              <Image
                source={isActive ? tab.iconFilled : tab.iconOutline}
                style={[
                  styles.icon,
                  isActive && styles.activeIcon,
                ]}
              />
              <Text
                style={[
                  styles.label,
                  showLabel && styles.labelVisible,
                  isActive && styles.activeLabel,
                  { marginTop: showLabel ? windowHeight * 0.005 : 0 }
                ]}
              >
                {tab.label}
              </Text>
            </View>
            {isActive && (
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
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.1,
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
    backgroundColor: 'white',
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: windowHeight * 0.03,
    height: windowHeight * 0.03,
    resizeMode: 'contain',
    tintColor: '#000', // Default black border
  },
  activeIcon: {
    tintColor: '#90EE90', // Filled color when active
  },
  label: {
    fontSize: windowWidth * 0.03,
    color: "transparent",
    fontWeight: "500",
    textAlign: 'center',
    height: windowHeight * 0.02,
  },
  labelVisible: {
    color: "#90EE90", // Green Primary
  },
  activeLabel: {
    fontWeight: "600",
  },
  activeIndicator: {
    position: "absolute",
    bottom: windowHeight * 0.015,
    width: windowWidth * 0.015,
    height: windowWidth * 0.015,
    borderRadius: windowWidth * 0.0075,
    backgroundColor: "#90EE90", // Green Primary
  },
});