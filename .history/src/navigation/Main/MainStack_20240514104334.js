import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import SettingStack from "./SettingStack";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" componet={HomeStack}/>
      <Tab.Screen name="Home" componet={RecipeStack}/>
      <Tab.Screen name="Home" componet={SearchStack}/>
      <Tab.Screen name="Home" componet={CommunityStack}/>
      <Tab.Screen name="Home" componet={SettingStack}/>
    </Tab.Navigator>
  );
};

export default MainStack;
