import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AboutScreen from "../../screens/Main/Setting/AboutScreen";
import OptionScreen from "../../screens/Main/Setting/OptionScreen";
import ProfileScreen from "../../screens/Main/Setting/ProfileScreen";
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
      <Stack.Screen
        name="AboutScreen"
        options={({ navigation }) => ({
          title: "Vế chúng tôi",
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
        {(props) => <AboutScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="OptionScreen"
        options={({ navigation }) => ({
          title: "Cài đặt",
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
        {(props) => <OptionScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="NotifyScreen"
        options={({ navigation }) => ({
          title: "Thông báo",
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
        {(props) => <NotifyScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="HistoryScreen"
        options={({ navigation }) => ({
          title: "Lịch sử",
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
        {(props) => <HistoryScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="SecutiryScreen"
        options={({ navigation }) => ({
          title: "Bảo mật",
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
        {(props) => <SecutiryScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="SecutiryScreen"
        options={({ navigation }) => ({
          title: "Bảo mật",
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
        {(props) => <SecutiryScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingStack;
