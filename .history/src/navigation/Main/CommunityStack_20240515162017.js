import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import CommunityScreen from '../../screens/Main/CommunityScreen';
const Stack = createNativeStackNavigator();
const CommunityStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

export default CommunityStack