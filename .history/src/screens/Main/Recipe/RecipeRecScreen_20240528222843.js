import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
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
        <View
            style={[styles.blog_content, { width: width - 32 }]}
            key={data.id}
          >
            <ImageBackground
              source={{ uri: data.image }}
              style={styles.blog_img}
              imageStyle={styles.imageBackground}
            ></ImageBackground>
            <View style={styles.blog_info}>
              <Text style={styles.blog_title}>{data.title}</Text>
              <Text style={styles.blog_desc}>{data.description}</Text>
            </View>
          </View>
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
});
