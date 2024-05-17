import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Exercise = () => {
  return (
    <View>
      <View style={styles.exercise_left}>
          <Text style={styles.exercise_text}>Bài tập</Text>
          <View style={styles.exercise_detail}>
            <View style={styles.exercise_calo}>
              <Image source={ExBurnedIcon} />
              <Text style={styles.burn_text}>100 kCal</Text>
            </View>
            <View style={styles.exercise_time}>
              <Image source={ExTimeIcon} />
              <Text style={styles.time_text}>1:20 Hr</Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_right}>
          <Pressable>
            <Image source={AddIcon} style={styles.add_icon} />
          </Pressable>
        </View>
    </View>
  )
}

export default Exercise

const styles = StyleSheet.create({})