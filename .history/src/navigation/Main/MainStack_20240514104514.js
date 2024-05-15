import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CommunityStack from "./CommunityStack";
import HomeStack from "./HomeStack";
import RecipeStack from "./RecipeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Home" component={RecipeStack} />
      <Tab.Screen name="Home" component={SearchStack} />
      <Tab.Screen name="Home" component={CommunityStack} />
      <Tab.Screen name="Home" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
