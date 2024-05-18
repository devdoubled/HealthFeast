import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IngredientItem from "../../../components/Main/Recipe/IngredientItem";
import ComponentItem from "../../../components/Main/Recipe/ComponentItem";
import componentList from "../../../data/componentList";
const RecipeDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.image_container, { width: width - 32 }]}>
        <Image
          source={{
            uri: "https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg",
          }}
          style={styles.recipe_image}
        />
      </View>
      <Text style={styles.recipe_name}>Cơm ức gà</Text>
      <View style={styles.ingredient_container}>
        <IngredientItem
          icon={
            <MaterialCommunityIcons
              name="food-outline"
              size={22}
              color="#000000"
            />
          }
          title={"Cân nặng"}
          number={300}
          unit={"Grams"}
          isBorder={"Cân nặng"}
        />
        <IngredientItem
          icon={
            <MaterialIcons
              name="local-fire-department"
              size={22}
              color="#000000"
            />
          }
          title={"Lượng calo"}
          number={500}
          unit={"kCal"}
          isBorder={"Lượng calo"}
        />
        <IngredientItem
          icon={<MaterialIcons name="access-time" size={22} color="#000000" />}
          title={"Thời gian"}
          number={45}
          unit={"Phút"}
          isBorder={"Thời gian"}
        />
      </View>
      <Text style={styles.recipe_component}>Thành phần:</Text>
      <View style={styles.recipe_component_container}>
        {componentList.map()}
        <ComponentItem />
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  image_container: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  recipe_image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 12,
  },
  recipe_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#000",
    marginHorizontal: 16,
    marginVertical: 15,
  },
  ingredient_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingRight: 12,
    marginBottom: 15,
  },
  recipe_component: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#000",
    marginHorizontal: 16,
    marginBottom: 15,
  },
  recipe_component_container: {
    marginHorizontal: 16
  }
});
