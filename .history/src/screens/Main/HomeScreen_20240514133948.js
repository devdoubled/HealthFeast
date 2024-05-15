import React from "react";
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
  const dates = [
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
    { weekday: "Sun", date: new Date()},
  ]
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcome_text}>Xin chào, Boạn!</Text>
        <Image source={WelcomeImg} style={styles.welcome_img} />
      </View>
      <View style={styles.date_picker}>
        <View style={styles.itemRow}>
          {dates.map((item, dateIndex) => {
            return (
              <TouchableWithoutFeedback>
                <View>
                  <Text>{item.weekday}</Text>
                  <Text>{item.date.getDate()}</Text>
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
});