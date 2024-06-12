import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ModalAddMeal from "../../../components/Main/Search/ModalAddMeal";
moment.locale("vi");

const MealResultDetailScreen = ({ route }) => {
  const { meal } = route.params;
  const width = Dimensions.get("window").width;
  const [valueCalories, setValueCalories] = useState(meal.totalCalories);
  const [valueCarb, setValueCarb] = useState(meal.totalCarb)
  const [valueProtein, setValueProtein] = useState(meal.totalProtein)
  const [valueFat, setValueFat] = useState(meal.totalFat)
  const [valueChooseCalories, setValueChooseCalories] = useState(100);
  const [wishlistIcon, setWishlistIcon] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handlePressMinusValueCalories = () => {
    if (valueChooseCalories <= 0) {
      return;
    }
    setValueChooseCalories((prev) => {
      const newValue = prev - 5;
      setValueCalories(newValue * (valueCalories / valueChooseCalories));
      setValueCarb(newValue * (valueCarb / valueChooseCalories));
      setValueProtein(newValue * (valueProtein / valueChooseCalories));
      setValueFat(newValue * (valueFat / valueChooseCalories));
      return newValue;
    });
  };

  const handlePressPlusValueCalories = () => {
    setValueChooseCalories((prev) => {
      const newValue = prev + 5;
      setValueCalories(newValue * (valueCalories / valueChooseCalories));
      setValueCarb(newValue * (valueCarb / valueChooseCalories));
      setValueProtein(newValue * (valueProtein / valueChooseCalories));
      setValueFat(newValue * (valueFat / valueChooseCalories));
      return newValue;
    });
  };

  const handlePressWishlistIcon = () => {
    setWishlistIcon(!wishlistIcon)
  };

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleAddMealBreakfast = async () => {
    const mealData = {
      recipeId: meal.recipeId,
      quantity: valueChooseCalories,
      calCalories: valueCalories,
      calFat: roundToOneDecimal(valueFat),
      calCarb: roundToOneDecimal(valueCarb),
      calProtein: roundToOneDecimal(valueProtein),
      mealName: meal.recipeName,
      image: meal.images[0].imagePath,
      mealTime: 1,
      date: formatDate()
    }

    console.log(mealData)
    try {
      const res =  await apiClient.get(`/Recipes/name?name=${debouncedValue}`);
    } catch (error) {

    }
  }


  const handleAddMealLunch = async () => {
    const mealData = {
      recipeId: meal.recipeId,
      quantity: valueChooseCalories,
      calCalories: valueCalories,
      calFat: roundToOneDecimal(valueFat),
      calCarb: roundToOneDecimal(valueCarb),
      calProtein: roundToOneDecimal(valueProtein),
      mealName: meal.recipeName,
      image: meal.images[0].imagePath,
      mealTime: 2,
      date: formatDate()
    }
  }

  const handleAddMealDinner = as () => {
    const mealData = {
      recipeId: meal.recipeId,
      quantity: valueChooseCalories,
      calCalories: valueCalories,
      calFat: roundToOneDecimal(valueFat),
      calCarb: roundToOneDecimal(valueCarb),
      calProtein: roundToOneDecimal(valueProtein),
      mealName: meal.recipeName,
      image: meal.images[0].imagePath,
      mealTime: 3,
      date: formatDate()
    }
  }

  const handleAddMealSnack = () => {
    const mealData = {
      recipeId: meal.recipeId,
      quantity: valueChooseCalories,
      calCalories: valueCalories,
      calFat: roundToOneDecimal(valueFat),
      calCarb: roundToOneDecimal(valueCarb),
      calProtein: roundToOneDecimal(valueProtein),
      mealName: meal.recipeName,
      image: meal.images[0].imagePath,
      mealTime: 1,
      date: formatDate()
    }
  }

  const formatDate = () => {
    const formattedDate = moment(Date.now()).format('YYYY-MM-DD');
    return formattedDate;
  };

  const roundToOneDecimal = (value) => {
    return parseFloat(value).toFixed(1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.result_detail_container, { width: width - 32 }]}>
        <ImageBackground
          source={{
            uri: meal.images[0].imagePath,
          }}
          style={styles.meal_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.meal_name}>{meal.recipeName}</Text>
        </ImageBackground>
        <View
          style={styles.information_container}
        >
          <Text style={styles.meal_size}>Trọng lượng</Text>
          <View style={styles.choose_size_container}>
            <View style={styles.calories}>
              <Text style={styles.calories_text}>{valueCalories} kCal</Text>
            </View>
            <View style={styles.choose_calories}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handlePressMinusValueCalories}
              >
                <AntDesign name="minuscircle" size={22} color="#9ABF5A" />
              </Pressable>
              <Text style={styles.choose_text}>{valueChooseCalories} g</Text>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handlePressPlusValueCalories}
              >
                <AntDesign name="pluscircle" size={22} color="#9ABF5A" />
              </Pressable>
            </View>
          </View>
          <View style={styles.component_container}>
            <View style={styles.sugar_container}>
              <Text style={styles.name}>Tinh bột</Text>
              <Text style={styles.value}>{roundToOneDecimal(valueCarb)} g</Text>
            </View>
            <View style={styles.protein_container}>
              <Text style={styles.name}>Đạm</Text>
              <Text style={styles.value}>{roundToOneDecimal(valueProtein)} g</Text>
            </View>
            <View style={styles.fat_container}>
              <Text style={styles.name}>Chất béo</Text>
              <Text style={styles.value}>{roundToOneDecimal(valueFat)} g</Text>
            </View>
          </View>
          <View style={styles.add_action_container}>
            <Pressable
              style={({ pressed }) => [
                styles.add_btn,
                pressed && styles.pressed,
              ]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.add_text}>Thêm món ăn</Text>
            </Pressable>
            <Pressable
              onPress={handlePressWishlistIcon}
              style={({ pressed }) => [
                styles.wishlist,
                pressed && styles.pressed,
              ]}
            >
              <AntDesign name={wishlistIcon ? "star" : "staro"} size={30} color="#9ABF5A" />
            </Pressable>
          </View>
        </View>
      </View>
      <ModalAddMeal
        visible={modalVisible}
        handleCloseModal={handleCloseModal}
        handleAddMealBreakfast={handleAddMealBreakfast}
        handleAddMealLunch={handleAddMealLunch}
        handleAddMealDinner={handleAddMealDinner}
        handleAddMealSnack={handleAddMealSnack} />
    </View>
  );
};

export default MealResultDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  result_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
  },
  meal_img: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  imageBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  meal_name: {
    position: "absolute",
    bottom: 40,
    left: 20,
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#FFFFFF",
  },
  information_container: {
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    backgroundColor: "#2E2E2E",
  },
  meal_size: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  choose_size_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  calories: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#9ABF5A",
  },
  calories_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#2E2E2E",
  },
  choose_calories: {
    flex: 0.95,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#9ABF5A",
  },
  choose_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#FFFFFF",
  },
  pressed: {
    opacity: 0.7,
  },
  component_container: {
    marginBottom: 15,
  },
  sugar_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  protein_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  fat_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  value: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  add_action_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  add_btn: {
    flex: 0.95,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#9ABF5A",
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
});
