import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecipeIconText from "../../../assets/images/recipe_small.png";
import Swiper from "react-native-swiper";
import moment from "moment";
import "moment/locale/vi";
const CaloriesTrackerScreen = () => {
  const width = Dimensions.get("window").width;
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
      <View style={[styles.tracker_container, { width: width - 32 }]}>

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
  tracker_container: {
    height: 450,
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#2E2E2E",
  },
});
