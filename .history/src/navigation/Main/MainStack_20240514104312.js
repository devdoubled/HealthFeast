import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" componet={HomeStack}/>
      <Tab.Screen name="Home" componet={RecipeStack}/>
      <Tab.Screen name="Home" componet={SearchStack}/>
      <Tab.Screen name="Home" componet={SearchStack}/>
    </Tab.Navigator>
  );
};

export default MainStack;
