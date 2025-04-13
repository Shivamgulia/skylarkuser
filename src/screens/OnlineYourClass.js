// src/screens/OnlineYourClass.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OnlineYourClass = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Video Player Section */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          paused={false}
        />
      </View>

      {/* Class Details Section */}
      <LinearGradient
        colors={['#ffffff', '#f0f9ff']}
        style={styles.detailsContainer}
      >
        <Text style={styles.classTitle}>Mathematics 101 - Algebra Basics</Text>
        
        <View style={styles.scheduleContainer}>
          <Icon name="schedule" size={20} color="#4a90e2" />
          <Text style={styles.scheduleText}>Mon, Wed, Fri | 10:00 AM - 11:30 AM</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.joinButton]}>
            <Text style={styles.buttonText}>Join Class Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.questionButton]}>
            <Icon name="help-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Ask Question</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Schedule */}
        <View style={styles.scheduleList}>
          <Text style={styles.sectionTitle}>Upcoming Classes</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.scheduleItem}>
              <Icon name="video-library" size={18} color="#4a90e2" />
              <Text style={styles.scheduleItemText}>
                Lecture {item}: Algebraic Expressions
              </Text>
              <Text style={styles.scheduleTime}>10:00 AM</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    height: 250,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  classTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  scheduleText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  joinButton: {
    backgroundColor: '#4a90e2',
    flex: 0.7,
    justifyContent: 'center',
  },
  questionButton: {
    backgroundColor: '#00c853',
    flex: 0.25,
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  scheduleList: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  scheduleItemText: {
    flex: 1,
    marginLeft: 10,
    color: '#444',
  },
  scheduleTime: {
    color: '#4a90e2',
    fontWeight: '500',
  },
});

export default OnlineYourClass;