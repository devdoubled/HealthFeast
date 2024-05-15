import moment from "moment";
import "moment/locale/vi";
import React, { useMemo, useRef, useState } from "react";
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
import AddIcon from "../../assets/images/add_icon.png";
import BurnedIcon from "../../assets/images/burned_icon.png";
import EatenIcon from "../../assets/images/eaten_icon.png";
import ExBurnedIcon from "../../assets/images/ex_burned.png";
import ExTimeIcon from "../../assets/images/ex_time.png";
import WelcomeImg from "../../assets/images/welcome_img.png";
import CircularProgress from "../../components/Main/Home/CircularProgress";
import MacroBar from "../../components/Main/Home/MacroBar";
moment.locale("vi");
const HomeScreen = () => {
  const width = Dimensions.get("window").width;
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
      <View style={[styles.daily_tracking, { width: width - 32 }]}>
        <View style={styles.eaten}>
          <Image source={EatenIcon} style={styles.eaten_img} />
          <Text style={styles.eaten_text}>Eaten</Text>
        </View>
        <CircularProgress eaten={1000} left={1500} />
        <View style={styles.burned}>
          <Image source={BurnedIcon} style={styles.burned_img} />
          <Text style={styles.burned_text}>Burned</Text>
        </View>
      </View>
      {/* Macro tracking */}
      <View style={[styles.macro_tracking, { width: width - 32 }]}>
        <MacroBar label="Đường" value={150} maxValue={300} color="#9ABF5A" />
        <MacroBar label="Đạm" value={150} maxValue={300} color="#B266FD" />
        <MacroBar label="Chất béo" value={150} maxValue={300} color="#5285E8" />
      </View>
      {/* Exercise tracking */}
      <View style={[styles.exercise_tracking, { width: width - 32 }]}>
        <View style={styles.exercise_left}>
          <Text style={styles.exercise_text}>Bài tập</Text>
          <View style={styles.exercise_detail}>
            <View style={styles.exercise_calo}>
              <Image source={ExBurnedIcon} />
              <Text style={styles.burn_text}>100 kCal</Text>
            </View>
            <View style={styles.exercise_time}>
              <Image source={ExTimeIcon} />
              <Text style={styles.time_text}>1:20 Hr</Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_right}>
          <Pressable>
            <Image source={AddIcon} style={styles.add_icon} />
          </Pressable>
        </View>
      </View>
      {/* Daily meal */}
      <View style={[styles.daily_meal, { width: width - 32 }]}>
        <Text style={styles.daily_meal_text}>Bữa ăn hàng ngày</Text>
        <View style={[styles.morning_meal, { width: width - 32 }]}></View>
        {/* <View style={styles.snack_meal}></View>
        <View style={styles.lunch_meal}></View>
        <View style={styles.dinner_meal}></View> */}
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
    fontFamily: "Montserrat Medium",
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
    fontFamily: "Montserrat Medium",
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
  exercise_left: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  exercise_text: {
    fontFamily: "Montserrat Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  exercise_detail: {
    flexDirection: "row",
    alighItems: "center",
    justifyContent: "flex-start",
  },
  exercise_calo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  burn_text: {
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
  },
  exercise_time: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  time_text: {
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
  },
  exercise_right: {
    alignItems: "center",
    justifyContent: "center",
  },
  daily_meal: {
    marginHorizontal: 16,
  },
  daily_meal_text: {
    fontFamily: "Montserrat Medium",
    fontSize: 20,
    marginBottom: 15,
    color: "#000000",
  },
  morning_meal: {
    height: 150,
    borderRadius: 13,
    marginBottom: 12,
    backgroundColor: "#F3F2F1",
  },
});