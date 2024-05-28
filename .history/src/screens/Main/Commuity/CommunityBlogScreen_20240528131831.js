import React from "react";
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";
import NavbarList from "../../../components/Main/Community/NavbarList";

const CommunityBlogScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Chia sẻ của mọi người</Text>
          <Text style={styles.normal_text}>Một cộng đồng HealthFeast tuyệt vời hơn.</Text>
        </View>
      </View>
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
});
