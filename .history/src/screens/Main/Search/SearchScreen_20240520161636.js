import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  View
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import NavbarList from "../../../components/Main/Search/NavbarList";
const SearchScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg}/>
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Bạn muốn ăn gì nè?</Text>
          <Text style={styles.normal_text}>Hãy chọn 1 món ăn bạn muốn.</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16
  }
});
