import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
          <View style={styles.voice_container}>
            <MaterialIcons name="keyboard-voice" size={24} color="black" />
            <Text style={styles.icon_text}>Giọng nói</Text>
          </View>
          <View style={styles.scan_container}>
            <MaterialCommunityIcons name="line-scan" size={24} color="black" />
            <Text style={styles.icon_text}>Scan</Text>
          </View>
        </View>
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
    marginTop: 15,
  },
  voice_container: {

  },
  sca_container: {

  }
});
