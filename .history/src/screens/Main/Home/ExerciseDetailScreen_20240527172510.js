import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { getImage } from "../../../utils/getImgExercise";
// import { calculateCaloriesBurned } from "../../../utils/calculateCaloriesBurned";
import { AntDesign } from "@expo/vector-icons";

const ExerciseDetailScreen = ({ route }) => {
  const { typeEx } = route.params ? route.params : { typeEx: "Chạy bộ" };
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.exercise_detail_container, { width: width - 32 }]}>
        <ImageBackground
          source={{
            uri: getImage(typeEx),
          }}
          style={styles.exercise_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.exercise_name}>{typeEx}</Text>
        </ImageBackground>
        <View style={styles.info_container}>
          <View style={styles.time_info}>
            <Text style={styles.time_text}>Thời gian</Text>
            <View style={styles.choose_time}>
              <Pressable style={({ pressed }) => pressed && styles.pressed}>
                <AntDesign name="down" size={30} color="#9ABF5A" />
              </Pressable>
              <Text style={styles.choose_text}>15 Phút</Text>
              <Pressable style={({ pressed }) => pressed && styles.pressed}>
                <AntDesign name="up" size={30} color="#9ABF5A" />
              </Pressable>
            </View>
          </View>
          <View style={styles.intensity_info}></View>
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  exercise_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
  },
  exercise_img: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  imageBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  exercise_name: {
    position: "absolute",
    bottom: 40,
    left: 20,
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#FFFFFF",
  },
  info_container: {
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    backgroundColor: "#2E2E2E",
  },
  time_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time_text: {
    fontFamily: ""
  },
  intensity_info: {},
});