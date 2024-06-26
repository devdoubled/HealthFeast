import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import ModalAddMealSuccess from "../../../components/Main/Home/Meal/ModalAddMealSuccess";
import ModalAddMeal from "../../../components/Main/Search/ModalAddMeal";
import NavbarList from "../../../components/Main/Search/NavbarList";
import { AuthContext } from "../../../context/AuthContext";
import apiClient from "../../../services/apiService";

const SearchMenuScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  const [menuList, setMenuList] = useState([])
  const [fullMenuList, setFullMenuList] = useState([]);
  const [menuItem, setMenuItem] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const searchInputRef = useRef(null);


  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await apiClient.get(`/Recipes`);
      const recipes = response.data;

      const transformedRecipes = recipes.map(recipe => ({
        id: recipe.recipeId,
        name: recipe.recipeName,
        image: recipe.images.length > 0 ? recipe.images[0].imagePath : null,
        totalCalories: recipe.totalCalories,
        weight: recipe.weightInGram,
        unit: 'g',
      }));
      setMenuList(transformedRecipes);
      setFullMenuList(transformedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setMenuList([]);
    setFullMenuList([]);
    fetchRecipes();
    if (searchInputRef.current) {
      searchInputRef.current.clear();
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseModalSuccess = () => {
    setModalVisibleSuccess(false);
  };

  const handleAddMeal = async (item, mealTime) => {
    const mealFavorite = {
      recipeId: item.id,
      accountId: user.accountId,
      mealTime: mealTime,
      name: item.name
    };
    try {
      await apiClient.post("/FavoriteRecipes/recipe", mealFavorite)
      setModalVisible(false);
      setModalVisibleSuccess(true)
    } catch (error) {
      console.log("Error add meal favorite: ", error)
    }
  };

  const handleChangeSearchInput = (search) => {
    if (search.trim() === '') {
      setMenuList(fullMenuList);
    } else {
      const filteredMenu = fullMenuList.filter(item =>
        item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
      );
      setMenuList(filteredMenu);
    }
  }

  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Thực đơn các bữa ăn</Text>
          <Text style={styles.normal_text}>
            Healthfeast sẽ giúp bạn chuẩn bị bữa ăn.
          </Text>
        </View>
      </View>
      <View style={styles.search_menu}>
        <TextInput
          style={styles.input_menu}
          placeholder="Tìm kiếm"
          keyboardType="default"
          onChangeText={(search) => handleChangeSearchInput(search)}
          ref={searchInputRef}
        />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#9ABF5A" />
        </View>
      ) : (
        <ScrollView
          style={styles.search_menu_list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={400}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#9ABF5A"]}
            tintColor={"#9ABF5A"} />}
        >
          {menuList.map((menuItem, index) => (
            <View style={styles.menu_item} key={index}>
              <View style={styles.menu_item_content}>
                <Image
                  source={{
                    uri: menuItem.image || "https://i.pinimg.com/736x/1c/3d/b6/1c3db6cd58aa7f8ff47a1663399190a8.jpg"
                  }}
                  style={styles.menu_item_img}
                />
                <View style={styles.menu_item_detail}>
                  <Text style={styles.item_name} numberOfLines={1} ellipsizeMode="tail">{menuItem.name}</Text>
                  <Text style={styles.item_info}>{menuItem.totalCalories} kCal, {menuItem.weight} {menuItem.unit}</Text>
                </View>
              </View>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => { setModalVisible(true); setMenuItem(menuItem) }}
              >
                <AntDesign name="pluscircle" size={30} color="#9ABF5A" />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      )}
      <ModalAddMealSuccess visible={modalVisibleSuccess} handleCloseModal={handleCloseModalSuccess} />
      <ModalAddMeal
        visible={modalVisible}
        item={menuItem}
        handleCloseModal={handleCloseModal}
        handleAddMeal={handleAddMeal}
      />
    </View>
  );
};

export default SearchMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 15,
  },
  title_img: {
    marginRight: 10,
  },
  text_container: {
    width: Platform.OS === "ios" ? "100%" : "80%",
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
  search_menu: {
    marginHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F3F2F1",
  },
  input_menu: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "#000000",
  },
  search_menu_list: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menu_item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  menu_item_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu_item_img: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 12,
  },
  menu_item_detail: {
    marginLeft: 20,
  },
  item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
    maxWidth: 220,
    overflow: 'hidden',
  },
  item_info: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#000000",
    marginTop: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
