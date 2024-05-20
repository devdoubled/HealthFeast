import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const MealResultDetailScreen = () => {
  const width = Dimensions.get("window").width;
  const [valueCalories, setValueCalories] = useState(30);
  const [valueChooseCalories, setValueChooseCalories] = useState(100);

  const handlePressMinusValueCalories = () => {
    if (valueChooseCalories <= 0) {
      return;
    }
    setValueChooseCalories((prev) => {
      const newValue = prev - 5;
      setValueCalories(newValue * (valueCalories / valueChooseCalories));
      return newValue;
    });
  };

  const handlePressPlusValueCalories = () => {
    setValueChooseCalories((prev) => {
      const newValue = prev + 5;
      setValueCalories(newValue * (valueCalories / valueChooseCalories));
      return newValue;
    });
  };
  return (
    <View style={styles.container}>
      <View style={[styles.result_detail_container, { width: width - 32 }]}>
        <ImageBackground
          source={{
            uri: "https://cdn.tgdd.vn/Files/2021/08/20/1376632/cach-lam-salad-trung-ca-hoi-thom-ngon-doc-dao-bo-duong-cho-ca-nha-202201041547339044.jpg",
          }}
          style={styles.meal_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.meal_name}>Salad trộn</Text>
        </ImageBackground>
        <ScrollView
          style={styles.information_container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
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
                <AntDesign name="minuscircle" size={30} color="#9ABF5A" />
              </Pressable>
              <Text style={styles.choose_text}>{valueChooseCalories} g</Text>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={handlePressPlusValueCalories}
              >
                <AntDesign name="pluscircle" size={30} color="#9ABF5A" />
              </Pressable>
            </View>
          </View>
          <View style={styles.component_container}>
            <View style={styles.sugar_container}>
              <Text style={styles.name}>Đường</Text>
              <Text style={styles.value}>50 g</Text>
            </View>
            <View style={styles.protein_container}>
              <Text style={styles.name}>Đạm</Text>
              <Text style={styles.value}>50 g</Text>
            </View>
            <View style={styles.fat_container}>
              <Text style={styles.name}>Chất béo</Text>
              <Text style={styles.value}>50 g</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    fontSize: 16,
    color: "#FFFFFF",
  },
  choose_size_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  calories: {
    width: 120,
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
    flex: 0.9,
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
    marginVertical: 10
  },
  fat_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
  value: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#FFFFFF",
  }
});
