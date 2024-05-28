import { BlurView } from 'expo-blur';
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_medium.png";
import NavbarList from "../../../components/Main/Community/NavbarList";
import { newsData } from "../../../data/newsData";

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
      >
        {newsData.map((news) => (
          <ImageBackground
          source={{
            uri: "https://cdn.tgdd.vn/Files/2021/08/20/1376632/cach-lam-salad-trung-ca-hoi-thom-ngon-doc-dao-bo-duong-cho-ca-nha-202201041547339044.jpg",
          }}
          style={[styles.news_img, { width: width - 32 }]}
          imageStyle={styles.imageBackground}
          key={news.id}
        >
          <Text style={styles.news_date}>{news.date}</Text>
          <View style={styles.news_name_container}>
            <BlurView
              intensity={50}
              style={styles.absolute}
            />
            <View style={styles.news_name}>
              <Text style={styles.news_name_text}>
                Yêu bản thân, nên bắt đầu bằng việc chăm sóc thể chất hay tinh thần?
              </Text>
            </View>
          </View>
        </ImageBackground>
        ))}
        
      </ScrollView>
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
    marginHorizontal: 16,
  },
  news_img: {
    height: 250,
    marginBottom: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imageBackground: {
    borderRadius: 15,
    resizeMode: "cover",
  },
  news_date: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  news_name_container: {
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  news_name: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  news_name_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
  },
});
