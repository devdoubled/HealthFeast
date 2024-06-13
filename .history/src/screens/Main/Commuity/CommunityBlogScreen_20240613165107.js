import moment from "moment";
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
import { blogData } from "../../../data/blogData";

const CommunityBlogScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Chia sẻ của mọi người</Text>
          <Text style={styles.normal_text}>
            Một cộng đồng HealthFeast tuyệt vời hơn.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.blog_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {blogData.map((data) => {
          const formattedDate = moment(data.date).format("DD/MM/YYYY");
          const source =
            typeof data.image === "string" ? { uri: data.image } : data.image;
          return (
            <View
              style={[styles.blog_content, { width: width - 32 }]}
              key={data.id}
            >
              <ImageBackground
                source={source}
                style={styles.blog_img}
                imageStyle={styles.imageBackground}
              ></ImageBackground>
              <View style={styles.blog_info}>
                <Text style={styles.blog_title}>{data.title}</Text>
                <View style={styles.blog_desc}>
                  <Text style={styles.blog_author}>Bởi {data.author}</Text>
                  <Text style={styles.blog_date}>Ngày đăng {formattedDate}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CommunityBlogScreen;

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
    marginRight: 5,
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
  blog_container: {
    marginHorizontal: 16,
  },
  blog_content: {
    marginBottom: 15,
  },
  blog_img: {
    width: "100%",
    height: 200,
  },
  imageBackground: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
  blog_info: {
    height: 120,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#464646",
  },
  blog_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
  },
  blog_desc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blog_author: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
  },
  blog_date: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
  }
});
