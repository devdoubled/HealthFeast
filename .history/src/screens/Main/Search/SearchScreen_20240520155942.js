import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";

const SearchScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </ScrollView>
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