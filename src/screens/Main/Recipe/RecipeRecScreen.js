import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import apiClient from "../../../services/apiService";
const RecipeRecScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const [wishlists, setWishlists] = useState([]);
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await apiClient.get(`/Recipes`);
      const newRecipes = response.data;
      const randomRecipes = getRandomRecipes(newRecipes, 10);
      setRecipes(randomRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomRecipes = (recipes, count) => {
    let shuffled = recipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const toggleWishlist = (index) => {
    setWishlists((prevWishlists) => {
      const newWishlists = [...prevWishlists];
      newWishlists[index] = !newWishlists[index];
      return newWishlists;
    });
  };

  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Gợi ý cho bạn nè?</Text>
          <Text style={styles.normal_text}>
            Hãy chọn 1 món ăn phù hợp với bạn.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.recipe_rec_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#9ABF5A" />
          </View>) : (
          recipes.map((data, index) => (
            <View
              style={[styles.recipe_content, { width: width - 32 }]}
              key={index}
            >
              <ImageBackground
                source={{ uri: data.images[0].imagePath }}
                style={styles.recipe_img}
                imageStyle={styles.imageBackground}
              ></ImageBackground>
              <View style={styles.recipe_info}>
                <View style={styles.recipe_main}>
                  <Text style={styles.recipe_name}>{data.recipeName}</Text>
                  <Text style={styles.recipe_calo}>
                    {data.totalCalories} kCal, 1 khẩu phần
                  </Text>
                </View>
                <Pressable onPress={() => toggleWishlist(index)}>
                  <AntDesign
                    name={wishlists[index] ? "star" : "staro"}
                    size={34}
                    color="#FFFFFF"
                  />
                </Pressable>
              </View>
            </View>
          ))
        )}

      </ScrollView>
    </View>
  );
};

export default RecipeRecScreen;

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
  recipe_rec_container: {
    flex: 1,
    marginHorizontal: 16,

  },
  recipe_content: {
    marginBottom: 15,
  },
  recipe_img: {
    width: "100%",
    height: 300,
  },
  imageBackground: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
  recipe_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#2E2E2E",
  },
  recipe_main: {
    flexDirection: "column",
  },
  recipe_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#FFFFFF",
    paddingBottom: 5,
  },
  recipe_calo: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
