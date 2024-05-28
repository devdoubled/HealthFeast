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
import RecipeIconText from "../../../assets/images/activity_medium.png";
import NavbarList from "../../../components/Main/Community/NavbarList";

const CommunityScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Hôm nay có gì mới</Text>
          <Text style={styles.normal_text}>
            Tin tức được HealthFeast cập nhật liên tục.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.news_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
};

export default CommunityScreen;

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
    marginBottom: 10,
  },
  title_img: {
    marginRight: 10,
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
  news_container: {
    height: 100,
    backgroundColor: "red",
    marginHorizontal: 16,
    marginTop: 15,
  },
});
