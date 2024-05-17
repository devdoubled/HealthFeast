import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_normal.png";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import recipeList from "../../../data/recipeList"
const Item = ({ title, image, calories, time }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.details}>{calories}</Text>
    <Text style={styles.details}>{time}</Text>
  </View>
);
const RecipeScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  // const handleDetailRecipePress = () => {
  //   navigation.navigate("RecipeDetailScreen");
  // };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Bạn muốn ăn gì nè?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 món ăn bạn muốn.</Text>
        </View>
      </View>
      <FlatList
    data={data}
    renderItem={({ item }) => (
      <Item title={item.title} image={item.image} calories={item.calories} time={item.time} />
    )}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={styles.container}
  />
    </View>
  );
};

export default RecipeScreen;

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
});