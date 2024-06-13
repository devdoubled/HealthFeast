import moment from "moment";
import "moment/locale/vi";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import BurnedIcon from "../../../assets/images/burned_icon.png";
import EatenIcon from "../../../assets/images/eaten_icon.png";
import WelcomeImg from "../../../assets/images/welcome_img.png";
import CircularProgress from "../../../components/Main/Home/CircularProgress";
import Exercise from "../../../components/Main/Home/Exercise";
import MacroBar from "../../../components/Main/Home/MacroBar";
import Meal from "../../../components/Main/Home/Meal/Meal";
import { AuthContext } from "../../../context/AuthContext";
import meals from "../../../data/meals";
import apiClient from "../../../services/apiService";
moment.locale("vi");

const HomeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const { user } = useContext(AuthContext);
  const [userStatistic, setUserStatistic] = useState({})
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
  const [mealHistories, setMealHistories] = useState({
    breakfast: null,
    lunch: null,
    dinner: null,
    snack: null,
  })
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const swiper = useRef();

  const formatDateNow = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return formattedDate;
  };

  const fetchUserStatistic = async () => {
    try {
      const statisticResponse = await apiClient.get(`/AccountStatistics/${user.accountId}`);
      setUserStatistic(statisticResponse.data);
    } catch (error) {
      setUserStatistic(null);
    }
  };

  const fetchExerciseData = async (date) => {
    try {
      const formattedDate = formatDateNow(date);
      const historyResponse = await apiClient.get(`/ExerciseHistories/personal/date?date=${formattedDate}`);
      const historyData = historyResponse.data;
      setExerciseHistory({
        totalCalBurned: historyData.totalCalBurned,
        totalDuration: historyData.totalDuration
      });
    } catch (error) {
      setExerciseHistory({
        totalCalBurned: 0,
        totalDuration: 0
      });
    }
  };

  const fetchMealData = async (date) => {
    try {
      const formattedDate = formatDateNow(date);
      const mealHistoryResponse = await apiClient.get(`/MealHistories/personal/date?date=${formattedDate}`);
      const mealData = mealHistoryResponse.data;
      const filterMealsByTime = (mealTime) => mealData.meals.filter(meal => meal.mealTime === mealTime);
      setMealHistories({
        breakfast: filterMealsByTime(1),
        lunch: filterMealsByTime(2),
        dinner: filterMealsByTime(3),
        snack: filterMealsByTime(4),
      });
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
        totalProtein: 0
      });
    }
  };

  useEffect(() => {
    fetchUserStatistic();
  }, [user.accountId]);

  useEffect(() => {
    fetchExerciseData(value);
    fetchMealData(value);
  }, [value]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUserStatistic();
    await fetchExerciseData(value);
    await fetchMealData(value);
    setRefreshing(false);
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

  const handleCaloriesTrackerPress = () => {
    navigation.navigate("CaloriesTrackerScreen", { userStatistic: userStatistic, date: value.toISOString() });
  };

  const handleAddMealPress = (mealId) => {
    navigation.navigate("AddMealScreen", { mealId: mealId });
  };

  const handlePressExcersize = () => {
    navigation.navigate("ExerciseScreen", { userStatistic: userStatistic });
  };

  const roundToDecimal = (value) => {
    return Math.round(value);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#9ABF5A"]} 
      tintColor={"#9ABF5A"} />}
    >
      {/* Welcome */}
      <View style={styles.welcome}>
        <Text style={styles.welcome_text}>Xin chào, Boạn!</Text>
        <Image source={WelcomeImg} style={styles.welcome_img} />
      </View>
      {/* Date picker */}
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
      {/* Date highlight */}
      <View style={styles.date_highlight}>
        <Text style={styles.date_title}>
          {isToday
            ? `Hôm nay, ${moment(value).format("dddd D/MM/YYYY")}`
            : formatDate(value)}
        </Text>
      </View>
      {/* Daily tracking */}
      <Pressable
        style={[styles.daily_tracking, { width: width - 32 }]}
        onPress={handleCaloriesTrackerPress}
      >
        <View style={styles.eaten}>
          <Image source={EatenIcon} style={styles.eaten_img} />
          <Text style={styles.eaten_text}>Nạp vào</Text>
        </View>
        <CircularProgress eaten={roundToDecimal(userStatistic.tdee) - (mealStatisticHistory?.totalCalories || 0) + exerciseHistory.totalCalBurned} target={roundToDecimal(userStatistic.tdee)} />
        <View style={styles.burned}>
          <Image source={BurnedIcon} style={styles.burned_img} />
          <Text style={styles.burned_text}>Đốt cháy</Text>
        </View>
      </Pressable>
      {/* Macro tracking */}
      <View style={[styles.macro_tracking, { width: width - 32 }]}>
        <MacroBar label="Tinh bột" value={Math.round(mealStatisticHistory.totalCarb || 0)} maxValue={Math.round(userStatistic.carbRecommended)} color="#9ABF5A" />
        <MacroBar label="Đạm" value={Math.round(mealStatisticHistory.totalProtein || 0)} maxValue={Math.round(userStatistic.proteinRecommended)} color="#B266FD" />
        <MacroBar label="Chất béo" value={Math.round(mealStatisticHistory.totalFat || 0)} maxValue={Math.round(userStatistic.fatRecommended)} color="#5285E8" />
      </View>
      {/* Exercise tracking */}
      <View style={[styles.exercise_tracking, { width: width - 32 }]}>
        <Exercise handlePressExcersize={handlePressExcersize} exerciseHistory={exerciseHistory} />
      </View>
      {/* Daily meal */}
      <View style={[styles.daily_meal, { width: width - 32 }]}>
        <Text style={styles.daily_meal_text}>Bữa ăn hàng ngày</Text>
        {meals.map((meal) => (
          <Meal
            width={width}
            key={meal.id}
            meal={meal}
            mealData={mealHistories}
            handleAddMealPress={handleAddMealPress}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  welcome: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  welcome_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    textAlign: "center",
    marginRight: 12,
  },
  date_picker: {
    flex: 1,
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
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  date_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#000000",
  },
  daily_tracking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 20,
  },
  eaten: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eaten_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginTop: 12,
    color: "#000000",
  },
  burned: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  burned_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginTop: 12,
    color: "#000000",
  },
  macro_tracking: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  exercise_tracking: {
    flexDirection: "row",
    alighItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 13,
    backgroundColor: "#F3F2F1",
  },

  daily_meal: {
    marginHorizontal: 16,
  },
  daily_meal_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    marginBottom: 15,
    color: "#000000",
  },
});
