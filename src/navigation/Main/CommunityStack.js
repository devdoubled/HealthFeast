import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import CommunityBlogScreen from "../../screens/Main/Commuity/CommunityBlogScreen";
import CommunityExpertScreen from "../../screens/Main/Commuity/CommunityExpertScreen";
import CommunityScreen from "../../screens/Main/Commuity/CommunityScreen";
const Stack = createNativeStackNavigator();
const CommunityStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   animation: "none",
      // }}
    >
      <Stack.Screen
        name="CommunityScreen"
        options={({ navigation }) => ({
          title: "Cộng đồng",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerRight: () => <HeaderButton source={NotifyIcon} />,
          headerLeft: () => <HeaderButton source={UserIcon} />,
        })}
      >
        {(props) => <CommunityScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="CommunityBlogScreen"
        options={({ navigation }) => ({
          title: "Blog",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerRight: () => <HeaderButton source={NotifyIcon} />,
          headerLeft: () => <HeaderButton source={UserIcon} />,
        })}
      >
        {(props) => <CommunityBlogScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="CommunityExpertScreen"
        options={({ navigation }) => ({
          title: "Chuyên gia",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerRight: () => <HeaderButton source={NotifyIcon} />,
          headerLeft: () => <HeaderButton source={UserIcon} />,
        })}
      >
        {(props) => <CommunityExpertScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CommunityStack;
