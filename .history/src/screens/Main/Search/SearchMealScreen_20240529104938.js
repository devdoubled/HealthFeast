import { Ionicons, AntDesign } from '@expo/vector-icons';
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
import SmileImg from "../../../assets/images/activity_extreme.png";
import NavbarList from "../../../components/Main/Search/NavbarList";

const SearchMealScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const swiper = useRef();

  const mealData = [
    {
      id: 1,
      name: "Bánh mì",
    },
    {
      id: 2,
      name: "Bánh phở",
    },
    {
      id: 1,
      name: "Cơm",
    },
    {
      id: 1,
      name: "Đậu hủ",
    },
    {
      id: 1,
      name: "Rau thơm",
    },
    {
      id: 1,
      name: "Canh chua",
    },
    {
      id: 1,
      name: "Cá hồi",
    },
    {
      id: 1,
      name: "Trứng",
    },
  ]

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
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Cá nhân hoá các bữa ăn</Text>
          <Text style={styles.normal_text}>
            Nhớ thêm thực đơn vào các bữa ăn bạn nhé.
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
      <View style={styles.date_highlight}>
        <Text style={styles.date_title}>
          {isToday
            ? `Hôm nay, ${moment(value).format("dddd D/MM/YYYY")}`
            : formatDate(value)}
        </Text>
      </View>
      <ScrollView
        style={[styles.meal_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.meal_content}>
          <View style={styles.meal_header}>
            <Text style={styles.meal_titie}>Bữa sáng</Text>
            <AntDesign name="star" size={28} color="#9ABF5A" />
            {/* <Ionicons name="trash-outline" size={28} color="red" /> */}
          </View>
          <View style={styles.meal_list}>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Bánh mì</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Bánh phở</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Cơm</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Đậu hủ</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Rau thơm</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Cá hồi</Text>
            </Pressable>
            <Pressable style={styles.meal_item}>
              <Text style={styles.meal_text}>Trứng</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    marginHorizontal: 16,
    marginTop: 5,
  },
  date_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#000000",
  },
  meal_container: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  meal_content: {
    marginBottom: 10,
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
    backgroundColor: "#464646"
  },
  meal_titie: {
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
    backgroundColor: "#FFFFFF"
  },
  meal_item: {
    padding: 10,
    borderWidth: 0.5,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderColor: "#9ABF5A",
    backgroundColor: "#FFFFFF"
  },
  meal_item_active: {
    padding: 10,
    borderWidth: 0.5,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    backgroundColor: "#9ABF5A"
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
  }
});