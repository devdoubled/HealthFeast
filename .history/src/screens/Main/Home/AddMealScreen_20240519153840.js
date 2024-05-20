import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import SearchResultItem from "../../../components/Main/Home/SearchResultItem";
const AddMealScreen = ({navigation}) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").width;
  const handlePressSearchResult = () => {
    navigation.navigate("AddMealDetailScreen")
  }
  return (
    <View style={styles.container}>
      <View style={[styles.add_meal_container, { width: width - 32 }]}>
        <View style={styles.search_container}>
          <Ionicons name="search" size={28} color="white" />
          <TextInput
            style={styles.input_search}
            placeholder="Tìm món ăn"
            placeholderTextColor="white"
            keyboardType="default"
          />
        </View>
        <View style={styles.search_options_container}>
          <Pressable
            style={({ pressed }) => [
              styles.voice_container,
              pressed && styles.pressed,
            ]}
          >
            <MaterialIcons name="keyboard-voice" size={26} color="white" />
            <Text style={styles.icon_text}>Giọng nói</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.scan_container,
              pressed && styles.pressed,
            ]}
          >
            <MaterialCommunityIcons name="line-scan" size={26} color="white" />
            <Text style={styles.icon_text}>Scan</Text>
          </Pressable>
        </View>
        {/* <View style={styles.no_search_result_container}>
          <Text style={styles.no_result_text}>Không có gì được tìm thấy</Text>
        </View> */}
        <ScrollView
          style={styles.search_result_container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <SearchResultItem handlePressSearchResult={handlePressSearchResult}/>
          <SearchResultItem handlePressSearchResult={handlePressSearchResult}/>
          <SearchResultItem handlePressSearchResult={handlePressSearchResult}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  add_meal_container: {
    height: "100%",
    marginHorizontal: 16,
    marginTop: 15,
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#2E2E2E",
  },
  search_container: {
    flexDirection: "row",
    marginTop: 5,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#464646",
  },
  input_search: {
    flex: 1,
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
  search_options_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  voice_container: {
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#464646",
  },
  scan_container: {
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#464646",
  },
  icon_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 25,
  },
  pressed: {
    opacity: 0.7,
  },
  no_search_result_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  no_result_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  search_result_container: {
    marginTop: 20,
  },
});
