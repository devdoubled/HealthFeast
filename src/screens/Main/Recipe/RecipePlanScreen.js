import { BlurView } from "expo-blur";
import React from "react";
import { Dimensions, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import RecipeIconText from "../../../assets/images/activity_very.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import recipePlan from "../../../data/recipePlan";
const RecipePlanScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Kế hoạch của bạn là gì?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 kế hoạch phù hợp với bạn.</Text>
        </View>
      </View>
      <ScrollView
        style={[styles.plan_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {recipePlan.map((plan) => (
          <ImageBackground
            source={{ uri: plan.image }}
            style={styles.plan_item}
            imageStyle={styles.imageBackground}
            key={plan.id}
          >
            <View style={styles.plan_content}>
              <BlurView intensity={50} style={styles.absolute} />
              <Text style={styles.plan_title}>{plan.title}</Text>
              <Text style={styles.plan_desc}>
                {plan.slogan}
              </Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecipePlanScreen;

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
  plan_container: {
    marginHorizontal: 16,
  },
  plan_item: {
    height: 250,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  imageBackground: {
    borderRadius: 12,
  },
  plan_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  plan_desc: {
    fontFamily: "Montserrat-Italic",
    fontSize: 12,
    color: "#FFFFFF",
    paddingTop: 5,
  },
  plan_content: {
    position: "relative",
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
});
