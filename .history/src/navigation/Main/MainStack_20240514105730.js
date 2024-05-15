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
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {
        fontFamily: "Montserrat-Medium",
        fontSize: 15
      },
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Recipe" component={RecipeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
