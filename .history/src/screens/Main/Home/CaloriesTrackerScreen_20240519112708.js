import moment from "moment";
import "moment/locale/vi";
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import RecipeIconText from "../../../assets/images/recipe_small.png";
import CaloriesProgress from "../../../components/Main/Home/CaloriesProgress";
import MealBar from "../../../components/Main/Home/MealBar";
const CaloriesTrackerScreen = () => {
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
          <CaloriesProgress eaten={1000} target={1500} />
        </View>
        <View style={styles.meal_tracker}>
          <View style={styles.tracker}>
            <MealBar label={"Ăn sáng"} value={200} maxValue={500} />
            <MealBar label={"Ăn trưa"} value={200} maxValue={500} />
          </View>
          <View style={styles.tracker}>
            <MealBar label={"Ăn vặt"} value={200} maxValue={500} />
            <MealBar label={"Ăn tối"} value={200} maxValue={500} />
          </View>
        </View>
        <View style={styles.explain_container}>
          <Text style={styles.calculate}>1500 = 1500 - 0 + 1500</Text>
          <Text style={styles.explain}>
            Duy trì = Mục tiêu - Ăn vào + Đốt cháy
          </Text>
        </View>
      </View>
      <View style={[styles.calories_tracker, { width: width - 32 }]}>
        <View style={styles.total_calories}>
          <Text style={styles.total_calories_text}>Tổng calo</Text>
          <Text style={styles.total_calories_number}>500</Text>
        </View>
        <View style={styles.net_calories}>
          <Text style={styles.net_calories_text}>Lượng calo ròng</Text>
          <Text style={styles.net_calories_number}>800</Text>
        </View>
        <View style={styles.target_calories}>
          <Text style={styles.target_calories_text}>Mục tiêu</Text>
          <Text style={styles.target_calories_number}>1500</Text>
        </View>
      </View>
      <View style={[styles.premium_container, { width: width - 32 }]}>
        <View style={styles.premium_intro}></View>
        <Text style={styles.premium_title}></Text>
        <Text style={styles.premium_title}></Text>
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
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#2E2E2E",
  },
});
