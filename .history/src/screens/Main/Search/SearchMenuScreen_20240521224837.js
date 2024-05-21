import React from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, View, TextInput } from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
const SearchMenuScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={styles.search_menu}>
      <TextInput
        style={styles.input_menu}
        placeholder="Tìm kiếm"
      />
      </View>
    </ScrollView>
  );
};

export default SearchMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  search_menu: { 
    marginHorizontal: 16,
    marginTop: 20,
  }
});
