import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
  Text,
} from "react-native";

const MealResultDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={[styles.result_detail_container, { width: width - 32 }]}>
        <ImageBackground
          source={{
            uri: "https://cdn.tgdd.vn/Files/2021/08/20/1376632/cach-lam-salad-trung-ca-hoi-thom-ngon-doc-dao-bo-duong-cho-ca-nha-202201041547339044.jpg",
          }}
          style={styles.meal_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.meal_name}>Salad trộn</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MealResultDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  result_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // backgroundColor: "#2E2E2E",
  },
  meal_img: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  imageBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  meal_name: {
    position: "absolute",
    bottom: 15,
    left: 15,
    fontFa
  }
});
