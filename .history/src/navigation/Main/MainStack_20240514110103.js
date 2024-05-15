import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import CommunityStack from "./CommunityStack";
import HomeStack from "./HomeStack";
import RecipeStack from "./RecipeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "Montserrat-Medium",
          fontSize: 15,
        },
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8
        }
        tabBarBackground: () => <BlurView intensity={95} style={{
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }} />,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Recipe" component={RecipeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
