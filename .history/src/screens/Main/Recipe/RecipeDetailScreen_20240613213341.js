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
import apiClient from "../../../services/apiService";
const RecipeDetailScreen = ({ route }) => {
  const width = Dimensions.get("window").width;
  const { recipeId } = route.params
  const [recipeItem, setRecipeItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const response = await apiClient.get(`/Recipes/${recipeId}`);
      const recipe = response.data;
      setRecipeItem(recipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchRecipe();
  };

  return (
    <>
    {isLoading ? (
      <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#9ABF5A" />
    </View>
    ) : (
      
    )}
    </>
    
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
