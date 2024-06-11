import moment from "moment";
import "moment/locale/vi";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
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

  const [exerciseHistory, setExerciseHistory] = useState([]);
  const [userStatistic, setUserStatistic] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch exercise history
        const historyResponse = await apiClient.get(`/ExerciseHistories/personal/date?date=${formatDate()}`);
        const historyData = historyResponse.data[0];
        setExerciseHistory(historyData.exercises);

        // Fetch user statistic
        const statisticResponse = await apiClient.get(`/AccountStatistics/${user.accountId}`);
        const userStatisticData = statisticResponse.data;
        setUserStatistic(userStatisticData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  const formatDate = () => {
    const now = new Date(Date.now());
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const swiper = useRef();

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
    navigation.navigate("CaloriesTrackerScreen", { userStatistic: userStatistic });
  };

  const handleAddMealPress = () => {
    navigation.navigate("AddMealScreen");
  };

  const handlePressExcersize = () => {
    navigation.navigate("ExerciseScreen", { userStatistic: userStatistic });
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
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
        <CircularProgress eaten={1000} target={1500} />
        <View style={styles.burned}>
          <Image source={BurnedIcon} style={styles.burned_img} />
          <Text style={styles.burned_text}>Đốt cháy</Text>
        </View>
      </Pressable>
      {/* Macro tracking */}
      <View style={[styles.macro_tracking, { width: width - 32 }]}>
        <MacroBar label="Tinh bột" value={150} maxValue={300} color="#9ABF5A" />
        <MacroBar label="Đạm" value={150} maxValue={300} color="#B266FD" />
        <MacroBar label="Chất béo" value={150} maxValue={300} color="#5285E8" />
      </View>
      {/* Exercise tracking */}
      <View style={[styles.exercise_tracking, { width: width - 32 }]}>
        <Exercise handlePressExcersize={handlePressExcersize} />
      </View>
      {/* Daily meal */}
      <View style={[styles.daily_meal, { width: width - 32 }]}>
        <Text style={styles.daily_meal_text}>Bữa ăn hàng ngày</Text>
        {meals.map((meal) => (
          <Meal
            width={width}
            key={meal.id}
            meal={meal}
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
