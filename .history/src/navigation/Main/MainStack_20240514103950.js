import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator initialRouteName={screen}>
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
