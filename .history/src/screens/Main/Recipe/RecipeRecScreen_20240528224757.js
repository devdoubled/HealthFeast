import { AntDesign } from "@expo/vector-icons";
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
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import { recipeRec } from "../../../data/recipeRec"
const RecipeRecScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Gợi ý cho bạn nè?</Text>
          <Text style={styles.normal_text}>
            Hãy chọn 1 món ăn phù hợp với bạn.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.recipe_rec_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {recipeRec.map((data) => (
          <View style={[styles.recipe_content, { width: width - 32 }]}>
          <ImageBackground
            source={{
              uri: "https://blog.onelife.vn/wp-content/uploads/2021/10/cach-lam-djau-hu-chien-sot-ca-chua-beo-thom-mon-chinh-600292754928.jpg",
            }}
            style={styles.recipe_img}
            imageStyle={styles.imageBackground}
          ></ImageBackground>
          <View style={styles.recipe_info}>
            <View style={styles.recipe_main}>
              <Text style={styles.recipe_name}>Đậu sốt thơm</Text>
              <Text style={styles.recipe_calo}>191 kCal, 1 khẩu phần</Text>
            </View>
            <AntDesign name={"staro"} size={34} color="#FFFFFF" />
          </View>
        </View>
        ))}
        
      </ScrollView>
    </View>
  );
};

export default RecipeRecScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#ffffff",
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
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
  recipe_rec_container: {
    marginHorizontal: 16,
  },
  recipe_content: {
    marginBottom: 15,
  },
  recipe_img: {
    width: "100%",
    height: 300,
  },
  imageBackground: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
  recipe_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#2E2E2E",
  },
  recipe_main: {
    flexDirection: "column",
  },
  recipe_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#FFFFFF",
    paddingBottom: 5,
  },
  recipe_calo: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
