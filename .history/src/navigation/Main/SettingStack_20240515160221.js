import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../../components/Main/HeaderButton';
import UserIcon from "../../assets/images/user_icon.png";

const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      options={({ navigation }) => ({
        title: "Tìm kiếm",
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
      {(props) => <HomeScreen {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
  )
}

export default SettingStack

const styles = StyleSheet.create({})