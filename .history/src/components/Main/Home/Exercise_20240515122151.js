import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import AddIcon from "../../../assets/images/add_icon.png";
import ExBurnedIcon from "../../../assets/images/ex_burned.png";
import ExTimeIcon from "../../../assets/images/ex_time.png";
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

const styles = StyleSheet.create({
  exercise_left: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  exercise_text: {
    fontFamily: "Montserrat Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  exercise_detail: {
    flexDirection: "row",
    alighItems: "center",
    justifyContent: "flex-start",
  },
  exercise_calo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  burn_text: {
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
  },
  exercise_time: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  time_text: {
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
  },
  exercise_right: {
    alignItems: "center",
    justifyContent: "center",
  },
})