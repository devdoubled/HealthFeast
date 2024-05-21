import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
const SearchMenuScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={styles.search_menu}>
        <TextInput
          style={styles.input_menu}
          placeholder="Tìm kiếm"
        />
      </View>
      <ScrollView style={styles.search_menu_list}>
        <View style={styles.menu_item}>

        </View>
      </ScrollView>
    </View>
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F3F2F1",
  },
  input_menu: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "#000000",
  },
  search_menu_list: {
    marginTop: 20,
    paddingHorizontal: 16,
  }
});
