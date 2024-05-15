import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CommunityStack from "./CommunityStack";
import HomeStack from "./HomeStack";
import RecipeStack from "./RecipeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLable: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    elevation: 0
  }
};
const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Recipe" component={RecipeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
