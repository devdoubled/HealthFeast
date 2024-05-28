import { BlurView } from "expo-blur";
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

const CommunityExpertScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Chuyên gia là cho bạn</Text>
          <Text style={styles.normal_text}>
            Các chuyên gia sẽ giúp bạn tốt hơn.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.expert_container, { width: width - 32 }]}
        howsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
              source={{ uri: "https://nutrihome.vn/wp-content/uploads/2020/07/BS-anpha-1.jpg" }}
              style={styles.expert_img}
              imageStyle={styles.imageBackground}
            >
              <View style={styles.news_name_container}>
                <BlurView intensity={50} style={styles.absolute} />
                <View style={styles.news_name}>
                  <Text style={styles.news_name_text}>Bùi Ngọc An Pha</Text>
                </View>
              </View>
            </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default CommunityExpertScreen;

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
  expert_container: {
    marginHorizontal: 16,
  },
  expert_img: {
    width: "100%",
    height: 450,
  },
  imageBackground: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
});
