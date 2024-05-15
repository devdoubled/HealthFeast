import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text>Xin chào, Boạn!</Text>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  welcome: {

  }
})