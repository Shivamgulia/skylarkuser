import { 
  FlatList, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
  TouchableOpacity // Add this import
} from "react-native";
import React from "react";
import Navbar from "../components/UI/Navbar";
import { useNavigation } from '@react-navigation/native';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Classes() {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/profile/profile.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.headerTitle}>Hello Neha!</Text>
          <Text style={styles.headerSubtitle}>Lets Start Your Day</Text>
        </View>
      </View>

      {/* Notification Card */}
      <View style={styles.notificationCard}>
        <View style={styles.notificationHeader}>
          <Image
            source={require("../../assets/classes/pen.png")}
            style={styles.notificationIcon}
          />
          <View>
            <Text style={styles.notificationTitle}>Pendika Agama</Text>
            <Text style={styles.notificationText}>Mr. Porwaji started an online class</Text>
          </View>
        </View>

        <Image
          source={require("../../assets/classes/line.png")}
          style={styles.dividerLine}
        />

        <View style={styles.notificationFooter}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/classes/sl1.png')}
              style={[styles.avatar, { zIndex: 3 }]}
            />
            <Image
              source={require('../../assets/classes/sl2.png')}
              style={[styles.avatar, { left: -20, zIndex: 2 }]}
            />
            <Image
              source={require('../../assets/classes/sl3.png')}
              style={[styles.avatar, { left: -40, zIndex: 1 }]}
            />
            <View style={styles.plusContainer}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>

          <View style={styles.joinButton}>
            <Image source={require("../../assets/classes/Vector.png")} />
            <Text style={styles.joinButtonText}>Join Learning</Text>
          </View>
        </View>
      </View>

      {/* Classes Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Classes</Text>
          <Text style={styles.sectionLink}>Add Classes</Text>
        </View>
        <FlatList
          horizontal
          data={[
            {
              id: 1,
              image: require("../../assets/homeimages/yoga.jpeg"),
            },
            {
              id: 2,
              image: require("../../assets/classes/boxing.webp"),
            },
            {
              id: 3,
              image: require("../../assets/homeimages/yoga2.jpg"),
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => navigation.navigate('ClassDetail', { classData: item })}
            >
              <Image source={item.image} style={styles.classImage} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Assignments Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Assignments</Text>
          <Text style={styles.sectionLink}>View All</Text>
        </View>
        <FlatList
          horizontal
          data={[
            {
              id: 1,
              image: require("../../assets/classes/ass1.jpg"),
              text: "Mr. Porwaji started an online class",
              top: false,
            },
            {
              id: 2,
              image: require("../../assets/classes/ass2.jpg"),
              text: "Mr. Porwaji started an online class",
              top: true,
            },
          ]} // Keep your data array
          renderItem={({ item }) => (
            <View style={styles.assignmentCard}>
              <Image source={item.image} style={styles.assignmentImage} />
              <Text style={styles.assignmentText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: windowHeight * 0.05,
    paddingBottom: windowHeight * 0.08, // Add this line
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.05,
    gap: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  profileImage: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: windowWidth * 0.035,
  },
  notificationCard: {
    backgroundColor: "black",
    marginHorizontal: windowWidth * 0.05,
    padding: windowWidth * 0.04,
    borderRadius: 13,
    marginBottom: windowHeight * 0.03,
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  notificationIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  notificationTitle: {
    color: "white",
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  notificationText: {
    color: "white",
    fontSize: windowWidth * 0.035,
  },
  dividerLine: {
    width: "100%",
    marginVertical: windowHeight * 0.015,
  },
  notificationFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 50,
    position: "relative",
  },
  plusContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -windowWidth * 0.06,
    zIndex: 0,
  },
  plusText: {
    fontSize: windowWidth * 0.06,
    color: "black",
  },
  joinButton: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: windowWidth * 0.06,
    paddingVertical: windowHeight * 0.01,
    borderRadius: 12,
    alignItems: "center",
    gap: windowWidth * 0.02,
  },
  joinButtonText: {
    color: "black",
    fontSize: windowWidth * 0.035,
  },
  sectionContainer: {
    marginVertical: windowHeight * 0.02,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  sectionLink: {
    fontSize: windowWidth * 0.035,
    color: "#8288E8",
  },
  classImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.33,
    borderRadius: 10,
    marginHorizontal: windowWidth * 0.02,
  },
  assignmentCard: {
    marginHorizontal: windowWidth * 0.02,
  },
  assignmentImage: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    borderRadius: 10,
  },
  assignmentText: {
    position: "absolute",
    color: "white",
    fontSize: windowWidth * 0.035,
    left: windowWidth * 0.02,
    bottom: windowHeight * 0.01,
    fontWeight: 'bold'
  },
  listContent: {
    paddingHorizontal: windowWidth * 0.03,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: windowHeight * 0.08,
    paddingBottom: windowHeight * 0.015,
    backgroundColor: 'white', // Optional: add background color if needed
    borderTopWidth: 1,      // Optional: add border if needed
    borderTopColor: '#eee',
  },
});