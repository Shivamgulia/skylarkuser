// components/UI/SubCategoryScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SubCategoryScreen = ({ subCategories, onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={subCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onSelect(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ddd' },
  text: { fontSize: 18 }
});

export default SubCategoryScreen;