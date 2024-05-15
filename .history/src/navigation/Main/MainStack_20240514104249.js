import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" componet={HomeStack}/>
    </Tab.Navigator>
  );
};

export default MainStack;
