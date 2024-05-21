import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
import 
const SearchScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
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
