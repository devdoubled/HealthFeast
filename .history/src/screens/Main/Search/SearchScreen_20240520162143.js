import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
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
        <Image source={SmileImg} style={styles.title_img}/>
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Mời bạn scan nha...</Text>
          <Text style={styles.normal_text}>Healthfeast sẽ tính calo của món ăn.</Text>
        </View>
      </View>
      <View style={[styles.scan_container, { width: width - 32 }]}></View>
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
    marginHorizontal: 16,
    marginBottom: 15,
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
  scan_container: {
    marginHorizontal: 16,
  }
});
