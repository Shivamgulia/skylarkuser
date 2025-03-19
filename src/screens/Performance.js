import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from "../components/UI/Navbar";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Performance() {
  const topList = ["Workout", "Fitness", "Strength", "Training"];
  
  return (
    <SafeAreaView style={[styles.container, { marginTop: 20 }]}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Categories List */}
        <View style={styles.topListContainer}>
          <FlatList
            data={topList}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topListContent}
            renderItem={({ item }) => (
              <View style={styles.topListItem}>
                <Text style={styles.topListText}>{item}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.divider} />

        {/* Filter/Sort/Search Row */}
        <View style={styles.filterRow}>
          <View style={[styles.filterItem, styles.bordered]}>
            <Icon name="filter" size={16} />
            <Text style={styles.filterText}>Filter</Text>
          </View>
          <View style={[styles.filterItem, styles.bordered]}>
            <Icon name="bars" size={16} />
            <Text style={styles.filterText}>Sorting</Text>
          </View>
          <View style={styles.filterItem}>
            <Icon name="search" size={16} />
            <Text style={styles.filterText}>Search</Text>
          </View>
        </View>

        {/* QR Code Section */}
        <View style={styles.qrContainer}>
          <View style={styles.qrContent}>
            <View style={styles.qrTextContainer}>
              <Text style={styles.qrTitle}>Scan Me</Text>
              <Text style={styles.qrSubtitle}>
                Scan the QR code to book your online classes
              </Text>
            </View>
            <Image
              source={require("../../assets/performance/qr.png")}
              style={styles.qrImage}
            />
          </View>
          <View style={styles.qrBottomBar} />
        </View>

        {/* Workout List */}
        <FlatList
          data={[
            {
              id: 1,
              text: "Total Body Strength",
              time: "45 min",
              image: require("../../assets/performance/yoga.jpeg"),
            },
            {
              id: 2,
              text: "Total Body Strength",
              time: "45 min",
              image: require("../../assets/performance/yoga2.webp"),
            },
            {
              id: 3,
              text: "Total Body Strength",
              time: "45 min",
              image: require("../../assets/performance/yoga3.png"),
            },
            {
              id: 4,
              text: "Total Body Strength",
              time: "45 min",
              image: require("../../assets/performance/cardio.png"),
            },
            
          ]}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.workoutList}
          renderItem={({ item }) => (
            <View style={styles.workoutItem}>
              <Image
                source={item.image}
                style={styles.workoutImage}
              />
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutText}>{item.text}</Text>
                <Text style={styles.workoutTime}>{item.time}</Text>
              </View>
            </View>
          )}
        />

        {/* Spacer for bottom navbar */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    maxHeight : '200'
  },
  workoutImage: {
    maxWidth: (windowWidth - 40) / 2, // Two columns with margins
    maxHeight : '200'
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
  
});