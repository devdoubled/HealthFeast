import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
const AddMealScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={[styles.add_meal_container, { width: width - 32 }]}>
        <View style={styles.search_container}>
        <Ionicons name="search" size={24} color="white" />
        </View>
      </View>
    </View>
  )
}

export default AddMealScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  add_meal_container: {
    height: "100%",
    marginHorizontal: 16,
    marginTop: 15,
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#2E2E2E"
  },
  search_container: {
    marginTop: 15,
  }
})