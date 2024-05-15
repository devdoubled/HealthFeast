import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CommunityStack from "./CommunityStack";
import HomeStack from "./HomeStack";
import RecipeStack from "./RecipeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#FFFFFF",
  tabBarInactiveTintColor: "#B4B4B4",
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 60,
    backgroundColor: "#464646",
    borderTopWidth: 0,
    elevation: 0,
  },
};
const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={focused && styles.nav_item}>
              <Image
                source={require("../../assets/images/home_icon.png")}
                style={{ width: 20, height: 20, tintColor: color }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Recipe" component={RecipeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  nav_item: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#9ABF5A",
  },
});