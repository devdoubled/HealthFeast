import React, { useState, useRef } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import NavbarList from "../../../components/Main/Search/NavbarList";
import Swiper from "react-native-swiper";

const SearchMealScreen = ({ navigation, route }) => {
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
      <View style={styles.meal_container}>
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
                          style={[
                            styles.itemDate,
                            isActive && { color: "#fff" },
                          ]}
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
      </View>
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
});
