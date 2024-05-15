import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CommunityStack from "./CommunityStack";
import HomeStack from "./HomeStack";
import RecipeStack from "./RecipeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: '#9ABF5A ',
  tabBarInactiveTintColor: '#B4B4B4',
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#464646",
    borderTopWidth: 0,
    elevation: 0,
  },
};
const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStack} options={{}} />
      <Tab.Screen name="Recipe" component={RecipeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
