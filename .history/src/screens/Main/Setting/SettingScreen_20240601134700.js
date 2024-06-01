import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';

const SettingScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.more_header, { width : width - 32 }]}>
        <View style={styles.streak}>
          <Text style={styles.streak_title}></Text>
          <Text style={styles.streak_t}></Text>
          <Text style={styles.streak_title}></Text>
        </View>
        <View style={styles.user}></View>
        <View style={styles.progress}></View>
      </View>
    </ScrollView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  more_header: {
    marginHorizontal: 16,
  }
})