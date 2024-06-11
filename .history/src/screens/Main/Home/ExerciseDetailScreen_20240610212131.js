import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExerciseDropdown from "../../../components/Main/Home/Exercise/ExerciseDropdown";
import { calculateCaloriesBurned } from "../../../utils/calculateCaloriesBurned";
import { getExerciseData } from "../../../utils/getExerciseData";
import { getImage } from "../../../utils/getImgExercise";
const ExerciseDetailScreen = ({ route }) => {
  const { typeEx, exerciseId } = route.params
  const width = Dimensions.get("window").width;
  const [time, setTime] = useState(15);
  const [intensity, setIntensity] = useState(100);
  const [valueExercise, setValueExercise] = useState(0);
  const [typeExercise, setTypeExercise] = useState("")
  const [wishlistIcon, setWishlistIcon] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const result = calculateCaloriesBurned(70, time, intensity, valueExercise);
    // setDisabled(result > 0);
    console.log(result);
  }, [time, intensity, valueExercise]);

  const handleIncreaseTime = () => {
    setTime((prev) => prev + 5);
  };

  const handleDecreaseTime = () => {
    if (time <= 5) return;
    setTime((prev) => prev - 5);
  };

  const handleIncreaseIntensity = () => {
    setIntensity((prev) => prev + 5);
  };

  const handleDecreaseIntensity = () => {
    if (intensity <= 10) return;
    setIntensity((prev) => prev - 5);
  };

  const handlePressWishlistIcon = () => {
    setWishlistIcon(!wishlistIcon);
  };

  const handlePressAddExercise = async () => {
    const exerciseData = {
      exerciseId: null,
      exerciseTypeId: exerciseId,
      date: formatDate(),
      exerciseTime: "",
      duration: time,
      percivedEffort: intensity,
      caloriesBurned: calculateCaloriesBurned(70, time, intensity, valueExercise),
      name: typeExercise
    }

    console.log(exerciseData);

    try {


    } catch (error) {

    }
  }

  const formatDate = () => {
    const now = new Date(Date.now());
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handleDecreaseTime}
              >
                <AntDesign name="down" size={20} color="#E55733" />
              </Pressable>
              <Text style={styles.choose_text}>{time} Phút</Text>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handleIncreaseTime}
              >
                <AntDesign name="up" size={20} color="#E55733" />
              </Pressable>
            </View>
          </View>
          <View style={styles.intensity_info}>
            <Text style={styles.intensity_text}>Cường độ</Text>
            <View style={styles.choose_intensity}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handleDecreaseIntensity}
              >
                <AntDesign name="down" size={20} color="#E55733" />
              </Pressable>
              <Text style={styles.choose_text}>{intensity}%</Text>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handleIncreaseIntensity}
              >
                <AntDesign name="up" size={20} color="#E55733" />
              </Pressable>
            </View>
          </View>
          <View style={styles.exercise_options}>
            <Text style={styles.options_text}>Dạng bài tập</Text>
            <ExerciseDropdown
              data={getExerciseData(typeEx)}
              setValueExercise={setValueExercise}
              setTypeExercise={setTypeExercise}
            />
          </View>
          <View style={styles.calories_info}>
            <View style={styles.calories_tracker}>
              <Text style={styles.calories_text}>
                {calculateCaloriesBurned(70, time, intensity, valueExercise)} KCal
              </Text>
            </View>
            <Text style={styles.calories_info_text}>Lượng Calo đã đốt</Text>
          </View>
          <View style={styles.add_action_container}>
            <Pressable
              style={({ pressed }) => [
                styles.add_btn,
                pressed && styles.pressed,
                disabled && styles.btn_disabled,
              ]}
              disabled={true}
              onPress={handlePressAddExercise}
            >
              <Text style={styles.add_text}>Thêm bài tập</Text>
            </Pressable>
            <Pressable
              onPress={handlePressWishlistIcon}
              style={({ pressed }) => [
                styles.wishlist,
                pressed && styles.pressed,
              ]}
            >
              <AntDesign
                name={wishlistIcon ? "star" : "staro"}
                size={30}
                color="#E55733"
              />
            </Pressable>
          </View>
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
    width: 140,
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  choose_time: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
  },
  choose_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  intensity_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  intensity_text: {
    width: 140,
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  choose_intensity: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
  },
  exercise_options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  options_text: {
    width: 140,
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  calories_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    zIndex: -1,
  },
  calories_tracker: {
    width: 130,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "#E55733",
  },
  calories_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  calories_info_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  pressed: {
    opacity: 0.7,
  },
  add_action_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    zIndex: -1,
  },
  add_btn: {
    flex: 0.95,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#E55733",
  },
  add_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  wishlist: {
    width: 90,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#464646",
  },
  btn_disabled: {
    backgroundColor: "rgba(229, 87, 51, 0.5)",
  },
});
