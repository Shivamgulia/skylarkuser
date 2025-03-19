import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import Navbar from "../components/UI/Navbar";
import { useNavigation } from "@react-navigation/native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Home() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const navigation = useNavigation();

  const gamesData = [
    {
      id: "1",
      gameName: "Basketball Championship",
      teamA: "Team Red",
      teamB: "Team Blue",
      scoreA: 82,
      scoreB: 75,
      date: "2024-03-15",
      players: [
        { id: 1, name: "Sarthak Singh", team: "Team Red", score: 22 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Blue", score: 18 },
        { id: 2, name: "Harsh Agarwal", team: "Team Red", score: 18 },        
      ]
    },
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
                <Icon5 name="clock" size={windowWidth * 0.04} color="#8888e9" />
                <Text style={styles.metaText}>25 min</Text>
              </View>
              <View style={styles.metaItem}>
                <Icon6 name="bolt-lightning" size={windowWidth * 0.04} color="#8888e9" />
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


// Update the Recent Games Section in the Home component
<View style={styles.sectionContainer}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Recent Matches</Text>
    <Pressable 
      onPress={() => navigation.navigate("ScoreList")}
      style={({ pressed }) => [styles.seeAllButton, pressed && styles.pressed]}
    >
      <Text style={styles.seeAllText}>View All</Text>
      <Icon5 name="arrow-right" size={12} color="#8888e9" />
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
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Completed</Text>
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
          <Text style={styles.vsText}>VS</Text>

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
            <Icon5 name="calendar" size={12} color="#666" />
            <Text style={styles.gameDate}>{item.date}</Text>
          </View>
        </View>
      </Pressable>
    )}
    contentContainerStyle={styles.gameListContent}
  />
</View>

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
  { text: "cardio", image: require("../../assets/homeimages/cardio.png"), color: "white", },
  { text: "yoga", image: require("../../assets/homeimages/yoga2.jpg"), color: "white" },
  { text: "boxing", image: require("../../assets/homeimages/boxing.webp"), color: "white" },
];

const secondCategoryData = [
  { text: "cardio", image: require("../../assets/homeimages/cat1.png"), color: "white" },
  { text: "yoga", image: require("../../assets/homeimages/cat2.webp"), color: "white" },
];

const styles = StyleSheet.create({
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
    backgroundColor: '#8888e9',
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
    backgroundColor: '#8888e9',
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
  infoText: {
    fontSize: 12,
    color: "white",
    textAlign: "left",
    fontWeight: "bold",
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
});