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
    height: 60,
    backgroundColor: "#464646",
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarBackground: () => {
    <BlurView intensity={9}/>
  }
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
                style={{ width: 24, height: 24, tintColor: color }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={RecipeStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={focused && styles.nav_item}>
              <Image
                source={require("../../assets/images/recipe_icon.png")}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={focused && styles.nav_item}>
              <Image
                source={require("../../assets/images/search_icon.png")}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={focused && styles.nav_item}>
              <Image
                source={require("../../assets/images/community_icon.png")}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={focused && styles.nav_item}>
              <Image
                source={require("../../assets/images/setting_icon.png")}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  nav_item: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#9ABF5A",
  },
});
