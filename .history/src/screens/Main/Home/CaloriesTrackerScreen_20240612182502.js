import moment from "moment";
import "moment/locale/vi";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import PremiumIcon from "../../../assets/images/premium_icon.png";
import RecipeIconText from "../../../assets/images/recipe_small.png";
import CaloriesProgress from "../../../components/Main/Home/CaloriesTracker/CaloriesProgress";
import MealBar from "../../../components/Main/Home/CaloriesTracker/MealBar";
import apiClient from "../../../services/apiService";
const CaloriesTrackerScreen = ({ route }) => {
  const width = Dimensions.get("window").width;
  const { userStatistic, date } = route.params;
  const parsedDate = new Date(date);
  const [exerciseHistory, setExerciseHistory] = useState({
    totalCalBurned: 0,
    totalDuration: 0
  });
  const [mealStatisticHistory, setMealStatisticHistory] = useState({
    totalCalories: 0,
    totalCarb: 0,
    totalFat: 0,
    totalProtein: 0,
  })
  const [breakfast, setBreakfeast] = useState([])
  const [value, setValue] = useState(parsedDate);
  const [week, setWeek] = useState(0);
  const swiper = useRef();

  useEffect(() => {
    const fetchExerciseData = async (date) => {
      try {
        const formattedDate = formatDateNow(date);
        const historyResponse = await apiClient.get(`/ExerciseHistories/personal/date?date=${formattedDate}`);
        const historyData = historyResponse.data;
        
        if (historyData) {
          setExerciseHistory({
            totalCalBurned: historyData.totalCalBurned,
            totalDuration: historyData.totalDuration
          });
        }
      } catch (error) {
        setExerciseHistory({
          totalCalBurned: 0,
          totalDuration: 0
        });
      }
    };
  
    fetchExerciseData(value);
  }, [value]);
  
  useEffect(() => {
    const fetchMealData = async (date) => {
      try {
        const formattedDate = formatDateNow(date);
        const mealHistoryResponse = await apiClient.get(`/MealHistories/personal/date?date=${formattedDate}`);
        const mealData = mealHistoryResponse.data;
        const breakfastMeal = mealData.meals.filter(meal => meal.mealTime === 1);
        const sumCalories = breakfastMeal.reduce((totalCalories, meal) => totalCalories + meal.calCalories, 0);
        console.log(sumCalories);
        
        setMealStatisticHistory({
          totalCalories: mealData.totalCalories,
          totalCarb: mealData.totalCarb,
          totalFat: mealData.totalFat,
          totalProtein: mealData.totalProtein,
        });
      } catch (error) {
        setMealStatisticHistory({
          totalCalories: 0,
          totalCarb: 0,
          totalFat: 0,
          totalProtein: 0,
        });
      }
    };
  
    fetchMealData(value);
  }, [value]);  

  const formatDateNow = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return formattedDate;
  };

  const weeks = useMemo(() => {
    const start = moment().add(week, "weeks").startOf("week");
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, "week").add(index, "day");

        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
          fullDate: date.format("dddd, D MMMM YYYY"),
        };
      });
    });
  }, [week]);

  const isToday = moment().isSame(value, "day");
  const formatDate = (date) => {
    return moment(date)
      .format("dddd D-MM-YYYY")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const roundToDecimal = (value) => {
    return Math.round(value);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>
            Tiếp nhận thức ăn của bạn nè
          </Text>
        </View>
      </View>
      <View style={styles.date_picker}>
        <Swiper
          index={1}
          ref={swiper}
          loop={false}
          showsPagination={false}
          onIndexChanged={(ind) => {
            if (ind === 1) {
              return;
            }
            setTimeout(() => {
              const newIndex = ind - 1;
              const newWeek = week + newIndex;
              setWeek(newWeek);
              setValue(moment(value).add(newIndex, "week").toDate());
              swiper.current.scrollTo(1, false);
            }, 100);
          }}
        >
          {weeks.map((dates, index) => (
            <View style={[styles.itemRow, { width: width }]} key={index}>
              {dates.map((item, dateIndex) => {
                const isActive =
                  value.toDateString() === item.date.toDateString();
                return (
                  <TouchableWithoutFeedback
                    key={dateIndex}
                    onPress={() => setValue(item.date)}
                  >
                    <View
                      style={[
                        styles.item,
                        isActive && {
                          backgroundColor: "#9ABF5A",
                          borderColor: "#9ABF5A",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemWeekday,
                          isActive && { color: "#fff" },
                        ]}
                      >
                        {item.weekday}
                      </Text>
                      <Text
                        style={[styles.itemDate, isActive && { color: "#fff" }]}
                      >
                        {item.date.getDate()}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ))}
        </Swiper>
      </View>
      <View style={[styles.tracker_container, { width: width - 32 }]}>
        <View style={styles.date_highlight}>
          <Text style={styles.date_title}>
            {isToday ? "Hôm nay" : formatDate(value)}
          </Text>
        </View>
        <View style={styles.progress_tracker}>
          <CaloriesProgress eaten={roundToDecimal(userStatistic.tdee) - (mealStatisticHistory?.totalCalories || 0) + exerciseHistory.totalCalBurned} target={roundToDecimal(userStatistic.tdee)} />
        </View>
        <View style={styles.meal_tracker}>
          <View style={styles.tracker}>
            <MealBar label={"Ăn sáng"} value={200} maxValue={roundToDecimal(userStatistic.tdee * 0.25)} />
            <MealBar label={"Ăn trưa"} value={200} maxValue={roundToDecimal(userStatistic.tdee * 0.35)} />
          </View>
          <View style={styles.tracker}>
            <MealBar label={"Ăn vặt"} value={200} maxValue={roundToDecimal(userStatistic.tdee * 0.2)} />
            <MealBar label={"Ăn tối"} value={200} maxValue={roundToDecimal(userStatistic.tdee * 0.2)} />
          </View>
        </View>
        <View style={styles.explain_container}>
          <Text style={styles.calculate}>
            {roundToDecimal(userStatistic.tdee) - (mealStatisticHistory?.totalCalories || 0) + exerciseHistory.totalCalBurned} = {roundToDecimal(userStatistic.tdee)} - {(mealStatisticHistory?.totalCalories || 0)} + {exerciseHistory.totalCalBurned}
          </Text>
          <Text style={styles.explain}>
            Duy trì = Mục tiêu - Ăn vào + Đốt cháy
          </Text>
        </View>
      </View>
      <View style={[styles.calories_tracker, { width: width - 32 }]}>
        <View style={styles.total_calories}>
          <Text style={styles.total_calories_text}>Tổng calo ăn vào</Text>
          <Text style={styles.total_calories_number}>{mealStatisticHistory?.totalCalories || 0}</Text>
        </View>
        <View style={styles.net_calories}>
          <Text style={styles.net_calories_text}>Lượng calo đốt cháy</Text>
          <Text style={styles.net_calories_number}>{exerciseHistory.totalCalBurned}</Text>
        </View>
        <View style={styles.target_calories}>
          <Text style={styles.target_calories_text}>Mục tiêu</Text>
          <Text style={styles.target_calories_number}>{roundToDecimal(userStatistic.tdee)}</Text>
        </View>
      </View>
      <View style={[styles.premium_container, { width: width - 32 }]}>
        <View style={styles.premium_intro}>
          <Image source={PremiumIcon} style={styles.premium_img} />
          <Text style={styles.premium_text}>Chức năng Premium</Text>
        </View>
        <Text style={styles.premium_title}>Thực phẩm chứa nhiều calo nhất</Text>
        <Text style={styles.premium_description}>
          Mở khóa cao cấp để tìm hiểu loại thực phẩm nào bạn đã đăng nhập có
          lượng calo cao nhất
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.go_premium,
            pressed && styles.go_premium_pressed,
          ]}
        >
          <Text style={styles.go_premium_text}>Đi đến Premium</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default CaloriesTrackerScreen;

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
    marginVertical: 10,
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
    fontSize: 22,
    paddingBottom: 3,
    color: "#000000",
  },
  date_picker: {
    flex: 1,
    maxHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
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
  tracker_container: {
    marginHorizontal: 16,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#2E2E2E",
  },
  date_highlight: {
    flex: 1,
  },
  date_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    textAlign: "center",
    color: "#FFFFFF",
  },
  progress_tracker: {
    marginVertical: 20,
  },
  meal_tracker: {
    marginBottom: 10,
  },
  tracker: {
    flexDirection: "row",
    marginBottom: 15,
  },
  explain_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  calculate: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "#F3F2F1",
    marginBottom: 5,
  },
  explain: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "#F3F2F1",
  },
  calories_tracker: {
    marginHorizontal: 16,
    marginVertical: 15,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#2E2E2E",
  },
  total_calories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total_calories_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  total_calories_number: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#B4B4B4",
  },
  net_calories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  net_calories_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  net_calories_number: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#B4B4B4",
  },
  target_calories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  target_calories_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  target_calories_number: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  premium_container: {
    marginHorizontal: 16,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#2E2E2E",
  },
  premium_intro: {
    flexDirection: "row",
    alignItems: "center",
  },
  premium_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    marginLeft: 12,
    color: "#B4B4B4",
  },
  premium_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
    marginVertical: 8,
  },
  premium_description: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  go_premium: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#9ABF5A",
  },
  go_premium_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#2E2E2E",
  },
  go_premium_pressed: {
    opacity: 0.9,
  },
});
