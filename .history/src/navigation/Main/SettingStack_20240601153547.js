import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SettingScreen from "../../screens/Main/Setting/SettingScreen";
const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        options={({ navigation }) => ({
          title: "Nhiều hơn",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
        })}
      >
        {(props) => <SettingScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="ProfileScreen"
        options={({ navigation }) => ({
          title: "Hồ sơ",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerBackTitleVisible: false,
        })}
      >
        {(props) => <ProfileScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingStack;
