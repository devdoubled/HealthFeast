import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import WelcomeImg from "../../assets/images/welcome_img.png";
const HomeScreen = () => {
  const { width } = Dimensions.get("window");
  const [value, setValue] = useState(new Date());
  const dates = [
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
    { weekday: "Sun", date: new Date() },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcome_text}>Xin chào, Boạn!</Text>
        <Image source={WelcomeImg} style={styles.welcome_img} />
      </View>
      <View style={styles.date_picker}>
        <View style={[styles.itemRow, { width: width }]}>
          {dates.map((item, dateIndex) => {
            const isActive = value.toDateString() === item.date.toDateString();
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
                    style={[styles.itemWeekday, isActive && { color: "#fff" }]}
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  welcome_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    textAlign: "center",
    marginRight: 12,
  },
  date_picker: {},
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
    fontSize: 13,
    fontWeight: "500",
    color: "#737373",
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
});
