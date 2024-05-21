import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
import SmileImg from "../../../assets/images/activity_extreme.png"
const SearchScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={styles.title_container}>
        <Image source={activity_extreme}/>
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
});
