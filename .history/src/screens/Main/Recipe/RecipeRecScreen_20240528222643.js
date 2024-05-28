import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
const RecipeRecScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList
        width={width}
        navigation={navigation}
        route={route}
      />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Gợi ý cho bạn nè?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 món ăn phù hợp với bạn.</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}></ScrollView>
    </View>
  )
}

export default RecipeRecScreen

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
})