import {
  Ionicons
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  // ActivityIndicator,
  Dimensions,
  // FlatList,
  Image,
  Platform,
  // RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
// import RecipeItem from "../../../components/Main/Recipe/RecipeItem";
import apiClient from './../../../services/apiService';
import RecipeRice from "../../../assets/images/recipe_rice.png"
const RecipeScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await apiClient.get("/Recipes");
      const recipes = response.data;
      setRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchRecipes();
  };

  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Bạn muốn ăn gì nè?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 món ăn bạn muốn.</Text>
        </View>
      </View>
      <View style={[styles.search_recipe, { width: width - 32 }]}>
        <TextInput
          style={styles.input_search}
          placeholder="Tìm món ăn"
          placeholderTextColor="#B4B4B4"
          keyboardType="default"
        />
        <Ionicons name="search" size={28} color="#B4B4B4" />
      </View>
      <View style={styles.recipe_options_list}>

      </View>
      {/* {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#9ABF5A" />
        </View>
      ) : (
        <FlatList
          data={recipes}
          renderItem={({ item }) => <RecipeItem item={item} navigation={navigation} />}
          keyExtractor={(item) => item.recipeId.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={[styles.list_container, { width: width - 24 }]}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#9ABF5A"]}
              tintColor={"#9ABF5A"}
            />
          }
        />
      )} */}
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#ffffff",
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  title_img: {
    marginRight: 15,
  },
  text_container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  highlight_text: {
    fontFamily: "Montserrat-Italic",
    fontSize: 24,
    paddingBottom: 3,
    color: "#000000",
  },
  normal_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  search_recipe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F3F2F1",
  },
  input_search: {
    flex: 1,
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  list_container: {
    marginHorizontal: 12,
    paddingBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
