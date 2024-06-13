import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ComponentItem from "../../../components/Main/Recipe/ComponentItem";
import IngredientItem from "../../../components/Main/Recipe/IngredientItem";
import componentList from "../../../data/componentList";
import apiClient from "../../../services/apiService";
const RecipeDetailScreen = ({ route }) => {
  const width = Dimensions.get("window").width;
  const { recipeId } = route.params
  log
  const [recipeItem, setRecipeItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   fetchRecipe();
  // }, []);

  // const fetchRecipe = async () => {
  //   try {
  //     const response = await apiClient.get(`/Recipes/${recipeId}`);
  //     const recipe = response.data;
  //     setRecipeItem(recipe);
  //   } catch (error) {
  //     console.error("Error fetching recipes:", error);
  //   } finally {
  //     setIsLoading(false);
  //     setRefreshing(false);
  //   }
  // };

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   fetchRecipe();
  // };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#9ABF5A"]}
        tintColor={"#9ABF5A"} />}
    >
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#9ABF5A" />
        </View>
      ) : (
        <>
          <View style={[styles.image_container, { width: width - 32 }]}>
            <Image
              source={{ uri: recipeItem.images[0].imagePath }}
              style={styles.recipe_image}
            />
          </View>
          <Text style={styles.recipe_name}>{recipeItem.recipeName}</Text>
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
              number={recipeItem.weightInGram}
              unit={"Grams"}
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
              number={recipeItem.totalCalories}
              unit={"kCal"}
            />
            <IngredientItem
              icon={<MaterialIcons name="access-time" size={22} color="#000000" />}
              title={"Thời gian"}
              number={recipeItem.timeInMinute}
              unit={"Phút"}
              isBorder={"Thời gian"}
            />
          </View>
          <Text style={styles.recipe_component}>Thành phần:</Text>
          <View style={styles.recipe_component_container}>
            {componentList.map((component) => (
              <ComponentItem component={component} key={component.id} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default RecipeDetailScreen;
<p></p>
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
    marginHorizontal: 16,
  },

});
