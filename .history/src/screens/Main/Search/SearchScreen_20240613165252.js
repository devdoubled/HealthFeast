import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import ScanImg from "../../../assets/images/scan.png";
import NavbarList from "../../../components/Main/Search/NavbarList";
const SearchScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const handlePressScanScreen = () => {
    navigation.navigate("ScanCameraScreen");
  };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Mời bạn scan nha...</Text>
          <Text style={styles.normal_text}>
            Healthfeast sẽ tính calo của món ăn.
          </Text>
        </View>
      </View>
      <View style={[styles.scan_container, { width: width - 32 }]}>
        <Pressable onPress={handlePressScanScreen}>
          <Image source={ScanImg} style={styles.scan_img} />
        </Pressable>
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
    marginHorizontal: 16,
    marginBottom: 15,
  },
  title_img: {
    marginRight: 10,
  },
  text_container: {
    width: Platform.OS === "ios" ? "100%" : "80%",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#464646",
  },
});
