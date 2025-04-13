// ExerciseDetail.js

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;
  const [sets, setSets] = useState([]);

  const addSet = () => {
    setSets([...sets, { kg: '', reps: '' }]);
  };

  const handleKgChange = (text, index) => {
    const newSets = [...sets];
    newSets[index].kg = text;
    setSets(newSets);
  };

  const handleRepsChange = (text, index) => {
    const newSets = [...sets];
    newSets[index].reps = text;
    setSets(newSets);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.exerciseTitle}>{exercise.name}</Text>

      <FlatList
        data={sets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.setContainer}>
            <Text style={styles.setNumber}>Set {index + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="kg"
              keyboardType="numeric"
              value={item.kg}
              onChangeText={(text) => handleKgChange(text, index)}
            />
            <TextInput
              style={styles.input}
              placeholder="reps"
              keyboardType="numeric"
              value={item.reps}
              onChangeText={(text) => handleRepsChange(text, index)}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={addSet}>
        <Text style={styles.buttonText}>+ Add Set</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={() => console.log(sets)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExerciseDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  exerciseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  setContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  setNumber: {
    fontSize: 16,
    width: 60,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 4,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  exerciseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 16,
  },
  instructions: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  }
});
