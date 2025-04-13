import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, Modal } from "react-native";
import React, { useState, useEffect } from "react";

import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import Navbar from "../components/UI/Navbar";
import { useNavigation } from "@react-navigation/native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const { width } = Dimensions.get('window'); // For responsiveness

export default function Home() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const navigation = useNavigation();
  const [showPopup, setShowPopup] = useState(true); // Control popup visibility

  const gamesData = [
    {
      id: "1",
      gameName: "Basketball Championship",
      teamA: "Team Red",
      teamB: "Team Blue",
      scoreA: 82,
      scoreB: 75,
      date: "2024-03-15",
      status: "Completed", 
      players: [
        { id: 1, name: "Sarthak Singh", team: "Team Red", score: 22 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Red", score: 18 },
      ]
    },
  ];

  const bannerImages = [
    require('../../assets/banners/banners1.png'),
    require('../../assets/banners/banners2.png'),
    require('../../assets/banners/banners3.png'),
  ];

  const handleCategoryPress = (category) => {
    navigation.navigate("CategoriesDetails", { category }); //Updated screen name
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Training Plan</Text>
          <Image
            source={require("../../assets/homeimages/fire.png")}
            style={styles.fireIcon}
            resizeMode="contain"
          />
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarContainer}>
          <FlatList
            data={days}
            numColumns={7}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View style={styles.calendarItem}>
                <Text style={styles.calendarText}>{item}</Text>
              </View>
            )}
            contentContainerStyle={styles.calendarContent}
          />

          <FlatList
            data={dates}
            numColumns={7}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <View style={styles.calendarItem}>
                <Text style={styles.calendarText}>{item}</Text>
              </View>
            )}
            contentContainerStyle={styles.calendarContent}
          />
        </View>

        <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {bannerImages.map((image, index) => (
          <Image key={index} source={image} style={styles.bannerImage} />
        ))}
      </ScrollView>

        {/* Today's Session */}
        <Pressable
          style={styles.sessionContainer}
          onPress={() => navigation.navigate("Session")}
        >
          <Text style={styles.sectionTitle}>Today's Session</Text>
          <Image
            source={require("../../assets/homeimages/yoga.jpeg")}
            style={styles.sessionImage}
            resizeMode="cover"
          />
          <View style={styles.sessionOverlay}>
            <View style={styles.sessionBadge}>
              <Text style={styles.badgeText}>Day 12</Text>
            </View>

            <View style={styles.sessionInfo}>
              <Text style={styles.strengthText}>Strength</Text>
              <Text style={styles.infoText}>Trainer Alex</Text>
            </View>

            <View style={styles.sessionMeta}>
              <View style={styles.metaItem}>
                <Icon5 name="clock" size={windowWidth * 0.04} color="#90EE90" />
                <Text style={styles.metaText}>25 min</Text>
              </View>
              <View style={styles.metaItem}>
                <Icon6 name="bolt-lightning" size={windowWidth * 0.04} color="#90EE90" />
                <Text style={styles.metaText}>560 kcal</Text>
              </View>
              <View style={styles.playButton}>
                <Icon5 name="play" size={windowWidth * 0.04} color="#ffff" />
              </View>
            </View>
          </View>
        </Pressable>

        {/* Categories Sections */}
        {[1, 2].map((section) => (
          <View key={section} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={section === 1 ? firstCategoryData : secondCategoryData}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleCategoryPress(item.text)}>
                  <View style={styles.categoryCard}>
                    <Image
                      source={item.image}
                      style={styles.categoryImage}
                      resizeMode="cover"
                    />
                    <Text style={[styles.categoryText, { color: item.color }]}>
                      {item.text}
                    </Text>
                  </View>
                </Pressable>
              )}
              contentContainerStyle={styles.categoryContent}
            />
          </View>
        ))}


<View style={styles.sectionContainer}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Recent Matches</Text>
    <Pressable
      onPress={() => navigation.navigate("ScoreList")}
      style={({ pressed }) => [styles.seeAllButton, pressed && styles.pressed]}
    >
      <Text style={styles.seeAllText}>View All</Text>
      <Icon5 name="arrow-right" size={14} color="#6366f1" />
    </Pressable>
  </View>

  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={gamesData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Pressable
        style={({ pressed }) => [styles.gameCard, pressed && styles.pressed]}
        onPress={() => navigation.navigate("ScoreDetailsScreen", { game: item })}
      >
        {/* Status Badge */}
        <View style={[styles.statusBadge, { backgroundColor: item.status === 'Completed' ? '#22c55e' : '#f59e0b' }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>

        {/* Teams Section */}
        <View style={styles.teamContainer}>
          {/* Team A */}
          <View style={styles.teamWrapper}>
            <Image
              source={require('../../assets/homeimages/team-red.png')}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>{item.teamA}</Text>
            <Text style={styles.teamScore}>{item.scoreA}</Text>
          </View>

          {/* VS Separator */}
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>

          {/* Team B */}
          <View style={styles.teamWrapper}>
            <Image
              source={require('../../assets/homeimages/team-blue.png')}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>{item.teamB}</Text>
            <Text style={styles.teamScore}>{item.scoreB}</Text>
          </View>
        </View>

        {/* Game Details */}
        <View style={styles.gameFooter}>
          <Text style={styles.gameTitle}>{item.gameName}</Text>
          <View style={styles.dateContainer}>
            <Icon5 name="calendar" size={14} color="#64748b" />
            <Text style={styles.gameDate}>{item.date}</Text>
          </View>
        </View>
      </Pressable>
    )}
    contentContainerStyle={styles.gameListContent}
  />
</View>

        {/* Pop up */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showPopup}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Image
                source={{ uri: "https://www.reliablesoft.net/wp-content/uploads/2023/04/promotional-marketing-benefits.png" }} // Replace with your image URL
                style={styles.image}
              />
              <Pressable
                style={styles.closeButton}
                onPress={() => setShowPopup(false)} // Close the modal
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Spacer for navbar */}
        <View style={{ height: windowHeight * 0.1 }} />
      </ScrollView>

      {/* Fixed Navbar */}
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
}

// Data for categories
const firstCategoryData = [
  { text: "Basketball", image: require("../../assets/performance/basketball.jpg"), color: "white" },
  { text: "Football", image: require("../../assets/performance/football.jpg"), color: "white" },
  { text: "Cricket", image: require("../../assets/performance/Cricket.jpg"), color: "white" },
  { text: "Hockey", image: require("../../assets/performance/TableTennis.jpg"), color: "white" }
];

const secondCategoryData = [
  { text: "Treadmill Sprint", image: require("../../assets/homeimages/cat1.png"), color: "white" },
  { text: "Jump Rope", image: require("../../assets/homeimages/cat1.png"), color: "white" },
  { text: "Rowing Machine", image: require("../../assets/homeimages/cat1.png"), color: "white" },
];

const styles = StyleSheet.create({

  
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  seeAllText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
  gameListContent: {
    paddingBottom: 8,
    gap: 16,
  },
  gameCard: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  statusBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#22c55e',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
    marginBottom:8
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  teamWrapper: {
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  teamLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  teamName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
  },
  teamScore: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
  },
  vsContainer: {
    backgroundColor: '#f1f5f9',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsText: {
    color: '#64748b',
    fontWeight: '800',
    fontSize: 14,
  },
  gameFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
    gap: 8,
  },
  gameTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  gameDate: {
    fontSize: 12,
    color: '#64748b',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  headerTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
  },
  fireIcon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    resizeMode: 'contain',
  },
  calendarContainer: {
    marginHorizontal: windowWidth * 0.03,
    marginBottom: windowHeight * 0.03,
  },
  calendarContent: {
    justifyContent: 'space-between',
  },
  calendarItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: windowHeight * 0.005,
  },
  calendarText: {
    fontSize: windowWidth * 0.035,
  },
  scrollContent: {
    paddingTop: windowHeight * 0.06,
    paddingBottom: windowHeight * 0.1, // Space for navbar
  },
  sessionImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    borderRadius: 13,
    resizeMode: "cover"
  },
  sessionContainer: {
    marginHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    marginBottom: windowHeight * 0.01,
    marginLeft: windowWidth * 0.03,
  },
  sessionOverlay: {
    ...StyleSheet.absoluteFillObject,
    top: windowHeight * 0.03,
    left: windowWidth * 0.05,
    justifyContent: 'space-between',
    paddingVertical: windowHeight * 0.02,
    marginTop: '12'
  },
  sessionBadge: {
    backgroundColor: '#90EE90',
    width: windowWidth * 0.18,
    borderRadius: 27,
    paddingVertical: windowHeight * 0.005,
  },
  badgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: windowWidth * 0.035,
    fontWeight: 'bold'
  },
  sessionInfo: {
    marginTop: windowHeight * 0.02,
  },
  infoText: {
    color: 'white',
    fontSize: windowWidth * 0.035,
  },
  sessionMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: windowWidth * 0.1,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth * 0.01,
  },
  metaText: {
    color: 'white',
    fontSize: windowWidth * 0.035,
  },
  playButton: {
    backgroundColor: '#90EE90',
    padding: windowWidth * 0.03,
    borderRadius: windowWidth * 0.5,
  },
  sectionContainer: {
    marginBottom: windowHeight * 0.03,
  },
  categoryContent: {
    paddingHorizontal: windowWidth * 0.03,
  },
  categoryCard: {
    marginRight: windowWidth * 0.05,
  },
  categoryImage: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.45,
    borderRadius: 10,
    resizeMode: "cover"
  },
  categoryText: {
    position: 'absolute',
    left: windowWidth * 0.04,
    bottom: windowHeight * 0.01,
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: windowHeight * 0.08,
    paddingBottom: windowHeight * 0.015,
  },
  strengthText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.015,
  },
  seeAllText: {
    color: '#8888e9',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  gameCard: {
    width: windowWidth * 0.6,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginRight: windowWidth * 0.04,
    padding: 16,
    marginLeft: windowWidth * 0.03,
  },
  gameContent: {
    justifyContent: 'space-between',
    height: '100%',
  },
  gameTitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    marginBottom: 8,
  },
  teamsContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  teamText: {
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  vsText: {
    fontSize: windowWidth * 0.03,
    color: '#666',
    marginVertical: 4,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  scoreText: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#8888e9',
  },
  gameDate: {
    fontSize: windowWidth * 0.03,
    color: '#666',
    marginTop: 'auto',
  },
  gameListContent: {
    paddingRight: windowWidth * 0.03,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#8888e9",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },

  scrollContainer: {
    alignItems: 'center',
  },
  bannerImage: {
    width: width,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
    
    margin: 12
  },

  
});