import React from "react";
import { Dimensions, Platform, ScrollView, StyleSheet } from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
import SmileImg from "../../../assets/images/activity_extreme.png";

const SearchMealScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Thực đơn cho các bữa ăn</Text>
          <Text style={styles.normal_text}> Healthfeast sẽ giúp bạn chuẩn bị các bữa ăn.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
