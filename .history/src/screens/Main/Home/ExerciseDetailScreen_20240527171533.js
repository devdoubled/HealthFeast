import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getImage } from "../../../utils/getImgExercise";
// import { calculateCaloriesBurned } from "../../../utils/calculateCaloriesBurned";
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
          <View style={style.time_info}></View>
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
  }
});
