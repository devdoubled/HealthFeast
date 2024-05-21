import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import NavbarList from "../../../components/Main/Search/NavbarList";
import { AntDesign } from "@expo/vector-icons";
const SearchMenuScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={styles.search_menu}>
        <TextInput style={styles.input_menu} placeholder="Tìm kiếm" />
      </View>
      <ScrollView
        style={styles.search_menu_list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.menu_item}>
          <View style={styles.menu_item_content}>
            <Image
              source={{
                uri: "https://www.huongnghiepaau.com/wp-content/uploads/2017/09/nau-com-tam-bang-noi-com-dien.jpg",
              }}
              style={styles.menu_item_img}
            />
            <Text style={styles.item_name}>Cơm</Text>
            <Text style={styles.item_info}>189 kCal, 100 g</Text>
          </View>
          <Pressable>
            <AntDesign name="pluscircle" size={24} color="black" />
          </Pressable>
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
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menu_item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  menu_item_detail: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu_item_img: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  
  item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: "#000000",
  },
  item_info: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
  },
});
