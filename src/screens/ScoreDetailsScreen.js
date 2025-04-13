import { Dimensions, FlatList, Pressable, StyleSheet, Text, View, ScrollView  } from "react-native";
import React, { useState } from "react";
import Navbar from "../components/UI/Navbar";
import Icon from "react-native-vector-icons/FontAwesome";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function ScoreDetailsScreen({ route, navigation }) {
  const { game } = route.params;
  const [selectedTeam, setSelectedTeam] = useState(game.teamA);
  
  // Filter players by selected team
  const teamPlayers = game.players.filter(player => player.team === selectedTeam);
  
  // Get unique teams from players
  const teams = [...new Set(game.players.map(player => player.team))];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#8888e9" />
          </Pressable>
          <Text style={styles.title}>{game.gameName}</Text>
          <View style={{ width: 20 }} /> {/* Spacer */}
        </View>

        {/* Score Display */}
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{game.scoreA}</Text>
          <Text style={styles.vsText}>-</Text>
          <Text style={styles.score}>{game.scoreB}</Text>
        </View>

        {/* Team Selector */}
        <View style={styles.teamSelector}>
          {teams.map(team => (
            <Pressable
              key={team}
              style={[
                styles.teamButton,
                selectedTeam === team && styles.selectedTeamButton
              ]}
              onPress={() => setSelectedTeam(team)}
            >
              <Text style={[
                styles.teamButtonText,
                selectedTeam === team && styles.selectedTeamText
              ]}>
                {team}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Players List */}
        <FlatList
          data={teamPlayers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.playerCard}>
              <Text style={styles.playerName}>{item.name}</Text>
              <View style={styles.playerDetails}>
                <Text style={styles.teamTag}>{item.team}</Text>
                <Text style={styles.playerScore}>{item.score} pts</Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>

      {/* Fixed Navbar */}
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
    
  },
  scrollContent: {
    paddingBottom: windowHeight * 0.12, // Space for navbar
    marginTop: 48,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: windowWidth * 0.05,
    fontWeight: "600",
    color: "#333",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  score: {
    fontSize: windowWidth * 0.1,
    fontWeight: "bold",
    color: "#8888e9",
    marginHorizontal: 15,
  },
  vsText: {
    fontSize: windowWidth * 0.06,
    color: "#666",
  },
  teamSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  teamButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  selectedTeamButton: {
    backgroundColor: "#8888e9",
  },
  teamButtonText: {
    fontSize: windowWidth * 0.04,
    color: "#666",
    fontWeight: "500",
  },
  selectedTeamText: {
    color: "white",
  },
  playerCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  playerName: {
    fontSize: windowWidth * 0.04,
    fontWeight: "600",
    color: "#333",
  },
  playerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  teamTag: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 15,
    fontSize: windowWidth * 0.035,
    color: "#666",
  },
  playerScore: {
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
    color: "#8888e9",
  },
  listContent: {
    paddingBottom: windowHeight * 0.05,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: windowHeight * 0.08,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});