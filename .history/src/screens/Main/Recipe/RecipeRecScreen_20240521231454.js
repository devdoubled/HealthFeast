import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";
import RecipeIconText from "../../../assets/images/activity_normal.png";
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
          <Text style={styles.normal_text}>Hãy chọn 1 kế hoạch phù hợp với bạn.</Text>
        </View>
      </View>
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
})