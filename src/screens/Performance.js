import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react"; // Add this import
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from "../components/UI/Navbar";
import { Dimensions } from "react-native";
import { Modal, TextInput } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const gymCategories = [
  {
    id: 1,
    name: "Cardio",
    image: require("../../assets/Categories/Cardio.jpg"),
    exercises: [
      {
        name: "Treadmill Sprints",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "Rowing Machine",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "Jump Rope",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "Stair Climber",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "Cycling",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "Battle Rope",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
      {
        name: "HIIT Workout",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
    ]
  },
  {
    id: 2,
    name: "Flexibility",
    image: require("../../assets/Categories/Flexibility.jpg"),
    exercises: [
      {
        name: "Cable Cross Over",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },

    ]
  },
  {
    id: 3,
    name: "Mobility",
    image: require("../../assets/Categories/Mobility.jpg"),
    exercises: [
      {
        name: "Cable Cross Over",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
    ]
  },
  {
    id: 4,
    name: "Strength",
    image: require("../../assets/Categories/Strength.jpg"),
    exercises: [
      {
        name: "Cable Cross Over",
        image: require("../../assets/exercises/LatpullDown.jpg"),
        instructions: "...",
      },
    ]
  }
];

const workoutData = [
  {
    id: 1,
    text: "Basketball",
    time: "Session",
    image: require("../../assets/performance/basketball.png"),
    category: "sports",
    kpi: {
      points: { current: 0, target: 20 },
      rebounds: { current: 0, target: 5 },
      assists: { current: 0, target: 3 }
    }
  },
  {
    id: 2,
    text: "Football",
    time: "Session",
    image: require("../../assets/performance/football.jpg"),
    category: "sports",
    kpi: {
      goals: { current: 0, target: 2 },
      passes: { current: 0, target: 15 },
      tackles: { current: 0, target: 5 }
    }
  },
  // Add more sports with their specific KPIs
];


export default function Performance({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("sports"); // Add state
  const topList = ["Workout", "Fitness", "Strength", "Training"];

  const [selectedSport, setSelectedSport] = useState(null);
  const [isSportsModalVisible, setIsSportsModalVisible] = useState(false);
  const [sportKpiInputs, setSportKpiInputs] = useState({});


  const filteredData = workoutData.filter(item => item.category === selectedCategory);

  return (
    <SafeAreaView style={[styles.container, { marginTop: 20 }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >


        <View style={styles.container}>
          <Text style={styles.heading}>Track Your Performance</Text>
        </View>



        {/* QR Code Section */}
        <View style={styles.qrContainer}>
          <View style={styles.qrContent}>
            <View style={styles.qrTextContainer}>
              <Text style={styles.qrTitle}>Scan Me</Text>
              <Text style={styles.qrSubtitle}>
                Scan the QR code to mark
              </Text>
            </View>
            <Image
              source={require("../../assets/performance/qr.png")}
              style={styles.qrImage}
            />
          </View>
          <View style={styles.qrBottomBar} />
        </View>

        {/* Add Category Buttons */}
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "sports" && styles.activeCategoryButton
            ]}
            onPress={() => setSelectedCategory("sports")}
          >
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === "sports" && styles.activeCategoryText
            ]}>
              Sports
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "gym" && styles.activeCategoryButton
            ]}
            onPress={() => setSelectedCategory("gym")}
          >
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === "gym" && styles.activeCategoryText
            ]}>
              Gym
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={selectedCategory === "gym" ? gymCategories : filteredData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.workoutList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.workoutItem}
              onPress={() => {
                if (selectedCategory === "gym") {
                  navigation.navigate("CategoryExercises", {
                    category: item.name,
                    exercises: item.exercises
                  });
                } else {
                  setSelectedSport(item);
                  setIsSportsModalVisible(true);
                  setSportKpiInputs({});
                }
              }}

            >
              <Image
                source={item.image}
                style={styles.workoutImage}
              />
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutText}>
                  {selectedCategory === "gym" ? item.name : item.text}
                </Text>
                {selectedCategory !== "gym" && (
                  <Text style={styles.workoutTime}>{item.time}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />


        {/* Spacer for bottom navbar */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        <Navbar />
      </View>

      <Modal
  visible={isSportsModalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setIsSportsModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>
        {(selectedSport?.text || 'Football')} Performance
      </Text>

      <ScrollView>
        {/* SAMPLE KPI DATA */}
        {[
          { metric: 'goals', current: 3, target: 5 },
          { metric: 'assists', current: 2, target: 4 },
          { metric: 'passes', current: 45, target: 60 },
        ].map(({ metric, current, target }) => (
          <View key={metric} style={styles.kpiRow}>
            <Text style={styles.kpiLabel}>
              {metric.charAt(0).toUpperCase() + metric.slice(1)}:
            </Text>
            <TextInput
              style={styles.kpiInput}
              keyboardType="numeric"
              placeholder={`Current (${current}/${target})`}
              value={sportKpiInputs[metric]?.toString()}
              onChangeText={(text) =>
                setSportKpiInputs((prev) => ({
                  ...prev,
                  [metric]: text,
                }))
              }
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.modalButtons}>
        <TouchableOpacity
          style={[styles.modalButton, styles.cancelButton]}
          onPress={() => setIsSportsModalVisible(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modalButton, styles.saveButton]}
          onPress={() => {
            console.log('Saved KPIs:', sportKpiInputs);
            setIsSportsModalVisible(false);
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  scrollContent: {
    paddingTop: 25,
    paddingBottom: 100, // Space for bottom navbar
  },
  topListContainer: {
    marginVertical: 20,
  },
  topListContent: {
    paddingHorizontal: 10,
  },
  topListItem: {
    backgroundColor: "black",
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: windowWidth * 0.22, // Responsive minimum width
  },
  topListText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  filterRow: {
    flexDirection: "row",
    marginVertical: 16,
    marginHorizontal: 10,
  },
  filterItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
  },
  bordered: {
    borderRightWidth: 1,
    borderColor: "black",
  },
  filterText: {
    fontWeight: "bold",
  },
  qrContainer: {
    backgroundColor: "#EFEFEF",
    marginHorizontal: 20,
    marginVertical: 25,
    borderRadius: 14,
  },
  qrContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  qrTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  qrTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  qrSubtitle: {
    fontSize: 14,
  },
  qrImage: {
    width: windowWidth * 0.25,
    aspectRatio: 1,
  },
  qrBottomBar: {
    backgroundColor: "black",
    height: 60,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  workoutList: {
    paddingHorizontal: 10,
  },
  workoutItem: {
    flex: 1,
    margin: 8,
    borderRadius: 14,
    overflow: "hidden",
    maxWidth: (windowWidth - 40) / 2, // Two columns with margins
    maxHeight: '200'
  },
  workoutImage: {
    maxWidth: (windowWidth - 40) / 2, // Two columns with margins
    maxHeight: '200'
  },
  workoutInfo: {
    backgroundColor: "black",
    padding: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  workoutText: {
    color: "white",
    fontWeight: 'bold'
  },
  workoutTime: {
    color: "white",
    paddingTop: 5,
    fontWeight: 'bold'
  },
  spacer: {
    height: 50,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: windowHeight * 0.08,
    paddingBottom: windowHeight * 0.015,
  },


  categoryButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
    marginHorizontal: 10,

  },
  categoryButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  activeCategoryButton: {
    backgroundColor: "#000",
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  activeCategoryText: {
    color: "#fff",
  },


  //new

  exerciseText: {
    fontSize: 18,
  },
  exerciseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  setNumber: {
    width: 60,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#34C759",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  //sports
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  kpiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  kpiLabel: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  kpiInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ff3b30',
  },
  saveButton: {
    backgroundColor: '#34C759',
  },


});