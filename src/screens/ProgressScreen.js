// screens/ProgressScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory-native';
import { useWorkout } from '../context/WorkoutContext';

const ProgressScreen = () => {
  const { workoutHistory } = useWorkout();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Workout History</Text>
      
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          data={workoutHistory}
          x="date"
          y={(d) => d.exercises.reduce((acc, ex) => acc + ex.sets.length, 0)}
        />
      </VictoryChart>

      <FlatList
        data={workoutHistory}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{new Date(item.date).toLocaleDateString()}</Text>
            <Text>Exercises: {item.exercises.length}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProgressScreen;