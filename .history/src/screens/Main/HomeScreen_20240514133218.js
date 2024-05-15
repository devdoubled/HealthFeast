import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import WelcomeImg from "../../assets/images/welcome_img.png"
const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text>Xin chào, Boạn!</Text>
        <View></View>
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