import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Giới tính của bạn?</Text>
      <Text style={styles.sub_text}>
        Giới tính là rất quan trọng trong việc tạo ra một kế hoạch giúp bạn đạt
        được kết quả mong muốn
      </Text>
    </View>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 30,
    marginTop: 30,
})