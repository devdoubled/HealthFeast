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
      <View style={styles.title_container}>
        <Image source={SmileImg}/>
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
    alig
    marginHorizontal: 16
  }
});
