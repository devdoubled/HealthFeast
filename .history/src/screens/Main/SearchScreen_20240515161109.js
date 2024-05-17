import React from 'react'
import { ScrollView, StyleSheet, Text, Platform } from 'react-native'

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>SearchScreen</Text>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
