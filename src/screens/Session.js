import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Session() {
  const navigation = useNavigation();

  const exerciseData = [
    {
      title: "Dynamic Warmup : 6 min",
      data: [
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Side Stretches Left",
          time: "8X",
        },
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Side Stretches Right",
          time: "8X",
        },
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Cobra",
          time: "8X",
        },
      ],
    },
    {
      title: "Interval : 15 min",
      data: [
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Side Stretches Left",
          time: "8X",
        },
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Side Stretches Right",
          time: "8X",
        },
        {
          image: require("../../assets/homeimages/strength.webp"),
          text: "Cobra",
          time: "8X",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/homeimages/strength.webp")}
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            {/* Navigation Buttons */}
            <View style={styles.headerButtons}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Icon
                  name="chevron-back"
                  size={windowWidth * 0.04}
                  color="white"
                />
              </Pressable>
              <Pressable style={styles.settingsButton}>
                <Icon
                  name="settings-outline"
                  size={windowWidth * 0.04}
                  color="white"
                />
              </Pressable>
            </View>

            {/* Exercise Info */}
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseTitle}>Strength</Text>
              <Text style={styles.trainerName}>Trainer Alex</Text>
            </View>

            {/* Duration and Calories */}
            <View style={styles.metaContainer}>
              <View style={styles.metaItem}>
                <Icon
                  name="time-outline"
                  size={windowWidth * 0.04}
                  color="#8888e9"
                />
                <Text style={styles.metaText}>25 min</Text>
              </View>
              <View style={styles.metaItem}>
                <Icon6
                  name="bolt-lightning"
                  size={windowWidth * 0.04}
                  color="#8888e9"
                />
                <Text style={styles.metaText}>560 kcal</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Exercise List */}
        {exerciseData.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <FlatList
              data={section.data}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => (
                <View style={styles.exerciseItem}>
                  <Image
                    source={item.image}
                    style={styles.exerciseImage}
                    resizeMode="cover"
                  />
                  <View style={styles.exerciseDetails}>
                    <Text style={styles.exerciseName}>{item.text}</Text>
                    <Text style={styles.exerciseDuration}>{item.time}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        ))}

        {/* Spacer for bottom buttons */}
        <View style={{ height: windowHeight * 0.1 }} />
      </ScrollView>

      {/* Bottom Control Bar */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.startButton} onPress={() => {}}>
          <Text style={styles.startButtonText}>Start Workout</Text>
        </Pressable>
        <Pressable style={styles.musicButton}>
          <Icon6 name="music" size={windowWidth * 0.05} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d",
  },
  scrollContent: {
    paddingBottom: windowHeight * 0.1,
  },
  imageContainer: {
    height: windowHeight * 0.4,
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    paddingTop: windowHeight * 0.05,
    paddingBottom: windowHeight * 0.03,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.04,
  },
  backButton: {
    backgroundColor: "black",
    padding: windowWidth * 0.03,
    borderRadius: windowWidth * 0.5,
  },
  settingsButton: {
    backgroundColor: "black",
    padding: windowWidth * 0.03,
    borderRadius: windowWidth * 0.5,
  },
  exerciseInfo: {
    alignItems: "center",
  },
  exerciseTitle: {
    color: "white",
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.005,
  },
  trainerName: {
    color: "white",
    fontSize: windowWidth * 0.06,
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: windowWidth * 0.1,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth * 0.02,
  },
  metaText: {
    color: "white",
    fontSize: windowWidth * 0.035,
  },
  sectionContainer: {
    marginTop: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.04,
  },
  sectionTitle: {
    color: "white",
    fontSize: windowWidth * 0.045,
    marginBottom: windowHeight * 0.02,
  },
  exerciseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: windowHeight * 0.02,
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: windowWidth * 0.03,
  },
  exerciseImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.25,
    borderRadius: 8,
  },
  exerciseDetails: {
    flex: 1,
    marginLeft: windowWidth * 0.04,
  },
  exerciseName: {
    color: "white",
    fontSize: windowWidth * 0.04,
    marginBottom: windowHeight * 0.005,
  },
  exerciseDuration: {
    color: "white",
    fontSize: windowWidth * 0.035,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: windowWidth * 0.04,
    backgroundColor: "#1d1d1d",
  },
  startButton: {
    flex: 1,
    backgroundColor: "#8288E8",
    height: windowHeight * 0.07,
    borderRadius: windowHeight * 0.035,
    justifyContent: "center",
    marginRight: windowWidth * 0.03,
  },
  startButtonText: {
    color: "white",
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
    textAlign: "center",
  },
  musicButton: {
    backgroundColor: "#414339",
    padding: windowWidth * 0.04,
    borderRadius: windowWidth * 0.5,
    aspectRatio: 1,
  },
});
