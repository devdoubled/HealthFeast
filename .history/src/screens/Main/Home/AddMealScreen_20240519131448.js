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
} from "react-native";
const AddMealScreen = () => {
  const width = Dimensions.get("window").width;
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
        <View style={styles.no_search_result_container}>
          <Text styls={styles.no_result_text}>Không có gì được tìm thấy</Text>
        </View>
        <View style={styles.search_result_container}></View>
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
    opacity: 0.9,
  },
  no_search_result_container: {
    
  }
});
