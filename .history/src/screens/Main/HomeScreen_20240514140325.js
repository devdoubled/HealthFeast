import moment from "moment";
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import WelcomeImg from "../../assets/images/welcome_img.png";
const HomeScreen = () => {
  const { width } = Dimensions.get("window");
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
        };
      });
    });
  }, [week]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcome_text}>Xin chào, Boạn!</Text>
        <Image source={WelcomeImg} style={styles.welcome_img} />
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
        <Text style={styles.subtitle}>{value.toDateString()}</Text>
        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
            {/* Replace with your content */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    maxHeight: 74,
    backgroundColor: "red",
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
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#B4B4B4",
  },
  date_highlight: {
    flex: 1,
    paddingHorizontal: 16,
  },
});