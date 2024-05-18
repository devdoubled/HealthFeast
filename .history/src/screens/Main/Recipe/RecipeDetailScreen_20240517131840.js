import React from 'react'
import { Platform, ScrollView, StyleSheet, View, Image } from 'react-native'

const RecipeDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.image_container, "]}>
        <Image source={uri: "https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg"}/>
      </View>
    </ScrollView>
  )
}

export default RecipeDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})