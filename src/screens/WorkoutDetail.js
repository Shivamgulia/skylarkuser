import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function WorkoutDetail({ route }) {
  const { workout } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image 
          source={workout.image} 
          style={styles.detailImage} 
          resizeMode="cover"
        />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>{workout.text}</Text>
          <Text style={styles.detailDuration}>{workout.time} Session</Text>
          
          {/* Add more workout details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Exercise Plan</Text>
            <Text style={styles.sectionText}>
              - Warm up (5 min){'\n'}
              - Strength circuits (30 min){'\n'}
              - Cool down (10 min)
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Equipment Needed</Text>
            <Text style={styles.sectionText}>
              - Dumbbells{'\n'}
              - Yoga mat{'\n'}
              - Water bottle
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailTextContainer: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  detailDuration: {
    fontSize: 20,
    color: '#666',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});