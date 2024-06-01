import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const DatePicker = () => {
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
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
