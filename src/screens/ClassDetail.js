import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ClassDetailScreen = () => {
  const route = useRoute();
  const { classData } = route.params;
  
  // Sample data - in real app this would come from your backend
  const classInfo = {
    zoomLink: 'https://zoom.us/j/123456789',
    schedule: [
      '🗓️ Every Wednesday 5 PM',
      '📅 Next Class: March 15, 2024',
      '⏰ Duration: 1 hour'
    ],
    materials: [
      '📘 Course Syllabus.pdf',
      '📹 Introduction Video.mp4'
    ]
  };

  const handleJoinClass = () => {
    if (classInfo.zoomLink) {
      Linking.openURL(classInfo.zoomLink);
    }
  };

  return (
    <View style={styles.container}>
      {/* Class Header */}
      <Image source={classData.image} style={styles.classImage} />
      
      {/* Zoom Section */}
      <View style={styles.section}>
        {classInfo.zoomLink ? (
          <TouchableOpacity style={styles.joinButton} onPress={handleJoinClass}>
            <Text style={styles.joinButtonText}>Join Class Now</Text>
            <Text style={styles.linkText}>{classInfo.zoomLink}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.noClassText}>No active class scheduled</Text>
        )}
      </View>

      {/* Class Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Class Schedule</Text>
        {classInfo.schedule.map((item, index) => (
          <Text key={index} style={styles.infoItem}>{item}</Text>
        ))}
      </View>

      {/* Materials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Materials</Text>
        {classInfo.materials.map((item, index) => (
          <View key={index} style={styles.materialItem}>
            <Text style={styles.materialText}>{item}</Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    
  },
  classImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 48
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  joinButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  linkText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  noClassText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    padding: 16,
  },
  infoItem: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 8,
  },
  materialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  materialText: {
    flex: 1,
    color: '#333',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  downloadText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ClassDetailScreen;