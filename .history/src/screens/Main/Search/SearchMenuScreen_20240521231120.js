import { AntDesign } from "@expo/vector-icons";
import React from "react";
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
import NavbarList from "../../../components/Main/Search/NavbarList";
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
            <View style={styles.menu_item_detail}>
              <Text style={styles.item_name}>Cơm</Text>
              <Text style={styles.item_info}>189 kCal, 100 g</Text>
            </View>
          </View>
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
          </Pressable>
        </View>
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
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
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
    justifyContent: "space-between",
    marginBottom: 10,
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
