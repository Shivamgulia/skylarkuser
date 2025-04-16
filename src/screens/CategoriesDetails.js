import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width, height } = Dimensions.get("window");

// Add these constants
const categories = ["Warm-up", "Strength", "Flexibility"];
const initialExercises = [
  { id: 1, name: "Treadmill Sprints", category: "Warm-up", duration: 10 },
  {
    id: 2,
    name: "Bench Press",
    category: "Strength",
    sets: 3,
    weight: 70,
    reps: 8,
  },
];

const scheduleWorkout = () => {
  setShowDatePicker(true);
};

const CardioScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Warm-up");
  const [showModal, setShowModal] = useState(false);
  const [exercises, setExercises] = useState(initialExercises);
  const [customExercise, setCustomExercise] = useState("");
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [workoutHistory, setWorkoutHistory] = useState([
    {
      date: "2025-03-28",
      exercises: [
        { name: "Treadmill Sprints", sets: 3, reps: 10, weight: "N/A" },
        { name: "Bench Press", sets: 3, reps: 8, weight: 70 },
      ],
    },
  ]);

  // Add handler functions
  const addSet = (exerciseId) => {
    setExercises(
      exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, sets: ex.sets + 1 } : ex
      )
    );
  };

  const addCustomExercise = () => {
    if (customExercise.trim()) {
      setExercises([
        ...exercises,
        {
          id: Date.now(),
          name: customExercise,
          category: selectedCategory,
        },
      ]);
      setCustomExercise("");
      setShowModal(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/homeimages/yoga.jpeg")}
          style={styles.topImage}
          resizeMode="cover"
        />

        {/* Full Overlay */}
        <View style={styles.fullOverlay}>
          {/* Title at Top */}
          <Text style={[styles.header, { alignSelf: "center" }]}>CARDIO</Text>

          {/* Metrics Cards */}
          <View style={styles.metricsContainer}>
            <View style={styles.imageDescription}>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>🔥 500kcal</Text>
                <Text style={styles.metricLabel}>Burn</Text>
              </View>
            </View>
            <View style={styles.imageDescription}>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>⚡ 30%</Text>
                <Text style={styles.metricLabel}>Fat Loss</Text>
              </View>
            </View>
            <View style={styles.imageDescription}>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>💪 85%</Text>
                <Text style={styles.metricLabel}>Stamina</Text>
              </View>
            </View>
          </View>

          {/* Description on Image */}
          <View style={styles.imageDescription}>
            <Text style={styles.imageDescriptionText}>
              Cardio workouts raise your heart rate, improve cardiovascular
              health, and boost overall stamina. Regular sessions enhance lung
              capacity and promote fat burning.
            </Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>Learn More →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Live Classes Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Classes</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Exercise Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={styles.exerciseCard}>
            <Image
              source={require("../../assets/homeimages/yoga.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>HIIT Training</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.cardDuration}>45 mins</Text>
                <View style={styles.difficultyPill}>
                  <Text style={styles.difficultyText}>Advanced</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
const BASE_COLOR = "#2D9CDB";
const LIGHT_BG = "#F8F9FC";
const TEXT_COLOR = "#2B2D42";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  headerContainer: {
    height: height * 0.75, // Increased image height
    marginBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  fullOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "space-between",
  },
  header: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0.8,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
    marginTop: height * 0.15,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  imageDescription: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  imageDescriptionText: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  moreButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2b2d42",
  },

  horizontalScroll: {
    paddingLeft: 20,
    paddingBottom: 30,
  },
  exerciseCard: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 18,
    marginRight: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2b2d42",
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  difficultyPill: {
    backgroundColor: "#f0f1f3",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  difficultyText: {
    color: "#6c757d",
    fontSize: 12,
    fontWeight: "600",
  },
  metricValue: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  metricLabel: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  setContainer: {
    marginTop: 10,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  historyDate: {
    fontWeight: "bold",
    color: "#2b2d42",
    marginBottom: 10,
  },

  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: LIGHT_BG,
    elevation: 2,
  },
  selectedCategory: {
    backgroundColor: BASE_COLOR,
  },
  categoryText: {
    color: TEXT_COLOR,
    fontWeight: "600",
  },
  exerciseItem: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    backgroundColor: "#FFF",
    fontSize: 14,
  },
  controlButton: {
    backgroundColor: BASE_COLOR,
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 3,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: LIGHT_BG,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  historyItem: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 16,
    borderRadius: 16,
    elevation: 1,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  // Update color references
  seeAll: {
    color: BASE_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  cardDuration: {
    color: BASE_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  setNumber: {
    color: BASE_COLOR,
    fontWeight: "600",
    marginRight: 15,
    width: 60,
  },
  historyDetails: {
    color: "#6C757D",
    fontSize: 13,
  },
  inputLabel: {
    color: TEXT_COLOR,
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 14,
    marginLeft: 5,
  },
  smallInput: {
    width: 80,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    backgroundColor: "#FFF",
  },
  addButton: {
    backgroundColor: BASE_COLOR,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  modalButton: {
    backgroundColor: BASE_COLOR,
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  historyExercise: {
    color: TEXT_COLOR,
    fontWeight: "600",
    marginBottom: 4,
  },
});

export default CardioScreen;
