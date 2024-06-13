import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SmileImg from "../../../assets/images/activity_extreme.png";
import ModalAddMeal from "../../../components/Main/Search/ModalAddMeal";
import NavbarList from "../../../components/Main/Search/NavbarList";

const SearchMenuScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const [modalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={SmileImg} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Thực đơn cho các bữa ăn</Text>
          <Text style={styles.normal_text}>
            Healthfeast sẽ giúp bạn chuẩn bị các bữa ăn.
          </Text>
        </View>
      </View>
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
            <View style={styles.menu_item_detail}>
              <Text style={styles.item_name}>Cơm</Text>
              <Text style={styles.item_info}>189 kCal, 100 g</Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="pluscircle" size={30} color="#9ABF5A" />
          </Pressable>
        </View>
      </ScrollView>
      <ModalAddMeal
        visible={modalVisible}
        handleCloseModal={handleCloseModal}
      />
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
    width: "80%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  highlight_text: {
    fontFamily: "Montserrat-Italic",
    fontSize: 22,
    paddingBottom: 3,
    color: "#000000",
  },
  normal_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
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
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menu_item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  menu_item_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu_item_img: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 12,
  },
  menu_item_detail: {
    marginLeft: 20,
  },
  item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  item_info: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#000000",
    marginTop: 5,
  },
  pressed: {
    opacity: 0.7,
  },
});
