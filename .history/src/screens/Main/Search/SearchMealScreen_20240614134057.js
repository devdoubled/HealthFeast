import { Entypo, Ionicons } from "@expo/vector-icons";
import "moment/locale/vi";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import NavbarList from "../../../components/Main/Search/NavbarList";
import { AuthContext } from "../../../context/AuthContext";
import apiClient from "../../../services/apiService";

const SearchMealScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const { user } = useContext(AuthContext);
  const [mealTimeData, setMealTimeData] = useState({
    breakfast: { meals: [], selected: [] },
    lunch: { meals: [], selected: [] },
    dinner: { meals: [], selected: [] },
    snack: { meals: [], selected: [] },
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchFavoriteRecipes()
  }, [])

  const fetchFavoriteRecipes = async () => {
    try {
      const response = await apiClient.get(`/FavoriteRecipes`);
      const favoritesData = response.data
      const filterFavoritesData = favoritesData.filter(item => item.accountId === user.accountId)

      const organizedData = {
        breakfast: { meals: filterFavoritesData.filter(item => item.mealTime === 1), selected: [] },
        lunch: { meals: filterFavoritesData.filter(item => item.mealTime === 2), selected: [] },
        dinner: { meals: filterFavoritesData.filter(item => item.mealTime === 3), selected: [] },
        snack: { meals: filterFavoritesData.filter(item => item.mealTime === 4), selected: [] },
      };

      setMealTimeData(organizedData);

    } catch (error) {
      console.log("Error fetch favarite data: ", error)
    } finally {
      setRefreshing(false);
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    fetchFavoriteRecipes()
  };

  const handleToggleMealSelection = (mealType, mealId) => {
    setMealTimeData(prevMealTimeData => {
      const selectedMeals = prevMealTimeData[mealType].selected;
      const newSelectedMeals = selectedMeals.includes(mealId)
        ? selectedMeals.filter(id => id !== mealId)
        : [...selectedMeals, mealId];

      return {
        ...prevMealTimeData,
        [mealType]: {
          ...prevMealTimeData[mealType],
          selected: newSelectedMeals,
        },
      };
    });
  };

  const deleteSelectedMeals = async (mealType) => {
    const selectedMeals = mealTimeData[mealType].selected;

    console.log(`${mealType} selected meals:`, selectedMeals);

    // Delete each selected meal from API
    for (let mealId of selectedMeals) {
      try {
        await apiClient.delete(`/FavoriteRecipes/${mealId}`);
        console.log(`Deleted meal with recipeId ${mealId}`);
      } catch (error) {
        console.log(`Error deleting meal with recipeId ${mealId}: `, error);
      }
    }

    // Refetch data after deletion
    fetchFavoriteRecipes();
  };

  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Cá nhân hoá các bữa ăn</Text>
          <Text style={styles.normal_text}>
            Nhớ thêm thực đơn các bữa ăn bạn nhé.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.meal_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#9ABF5A"]}
          tintColor={"#9ABF5A"} />}
      >
        {[
          { title: 'Bữa sáng', mealType: 'breakfast' },
          { title: 'Bữa trưa', mealType: 'lunch' },
          { title: 'Bữa tối', mealType: 'dinner' },
          { title: 'Bữa ăn vặt', mealType: 'snack' },
        ].map((meal, index) => (
          <MealComponent
            key={index}
            title={meal.title}
            mealType={meal.mealType}
            mealData={mealTimeData[meal.mealType].meals}
            selectedMeals={mealTimeData[meal.mealType].selected}
            handleToggleMealSelection={handleToggleMealSelection}
            onPressHandler={() => deleteSelectedMeals(meal.mealType)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const MealComponent = ({ title, mealType, mealData, selectedMeals, handleToggleMealSelection, onPressHandler }) => (
  <View style={styles.meal_content}>
    <View style={styles.meal_header}>
      <Text style={styles.meal_title}>{title}</Text>
      {selectedMeals.length > 0 ? (
        <Ionicons name="trash-outline" size={28} color="#9ABF5A" onPress={onPressHandler}/>
      ) : (
        <Entypo name="dots-three-horizontal" size={28} color="#9ABF5A" />
      )}
    </View>
    <View style={styles.meal_list}>
      {mealData.length > 0 ? (
        mealData.map((meal, index) => {
          const isSelected = selectedMeals.includes(meal.recipeId);
          return (
            <Pressable
              key={index}
              onPress={() => handleToggleMealSelection(mealType, meal.recipeId)}
              style={[
                styles.meal_item,
                isSelected && styles.meal_item_active,
              ]}
            >
              <Text
                style={[
                  styles.meal_text,
                  isSelected && styles.meal_text_active,
                ]}
              >
                {meal.name}
              </Text>
            </Pressable>
          );
        })
      ) : (
        <Text style={styles.none_recipe}>Không có món ăn được thêm vào {title.toLowerCase()}.</Text>
      )}
    </View>
  </View>
);

export default SearchMealScreen;

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
  date_picker: {
    maxHeight: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e3e3e3",
    flexDirection: "column",
    alignItems: "center",
  },
  itemWeekday: {
    fontSize: 14,
    fontWeight: "500",
    color: "#B4B4B4",
    marginBottom: Platform.OS === "ios" ? 4 : 0,
  },
  itemDate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#B4B4B4",
  },
  date_highlight: {
    marginHorizontal: 16,
    marginTop: 5,
  },
  date_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#000000",
  },
  meal_container: {
    flexDirection: "column",
    marginHorizontal: 16,
    marginTop: 15,
  },
  meal_content: {
    marginBottom: 15,
  },
  meal_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#464646",
  },
  meal_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#FFFFFF",
  },
  meal_list: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: 15,
    marginTop: -15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: "#9ABF5A",
    backgroundColor: "#FFFFFF",
  },
  meal_item: {
    padding: 10,
    borderWidth: 0.5,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderColor: "#9ABF5A",
    backgroundColor: "#FFFFFF",
  },
  meal_item_active: {
    padding: 10,
    borderWidth: 0.5,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    backgroundColor: "#9ABF5A",
  },
  meal_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#9ABF5A",
  },
  meal_text_active: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  none_recipe: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#9ABF5A",
  }
});
