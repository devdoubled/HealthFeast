import React from 'react'
import { Platform, ScrollView, StyleSheet, Text } from 'react-native'
import RecipeIconText from "../../../assets/images/activity_normal.png";
const CaloriesTrackerScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Kế hoạch của bạn là gì?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 kế hoạch phù hợp với bạn.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default CaloriesTrackerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})