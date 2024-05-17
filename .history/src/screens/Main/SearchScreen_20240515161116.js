import React from 'react';
import { Platform, ScrollView, StyleSheet, Text } from 'react-native';

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
