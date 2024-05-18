import React from 'react'
import { Platform, ScrollView, StyleSheet, View, Image, Dimensions } from 'react-native'

const RecipeDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.image_container, {width: width - 32}]}>
      <Image
          source={{ uri: "https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg" }}
          style={styles.image}
        />
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
  image_container: {
    marginHorizontal: 16
  }
})