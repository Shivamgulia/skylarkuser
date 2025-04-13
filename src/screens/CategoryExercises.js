import React from 'react';
import { 
  SafeAreaView, 
  FlatList, 
  TouchableOpacity, 
  Text, 
  Image, 
  View, 
  StyleSheet 
} from 'react-native';

const CategoryExercises = ({ route, navigation }) => {
  const { exercises } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={() => navigation.navigate("ExerciseDetail", { exercise: item })}
          >
            <Image 
              source={item.image} 
              style={styles.exerciseImage} 
            />
            <View style={styles.textContainer}>
              <Text style={styles.exerciseText}>{item.name}</Text>
              <Text style={styles.instructionText}>{item.instructions}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    elevation: 2,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CategoryExercises;