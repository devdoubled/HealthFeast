import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../../components/Main/HeaderButton';
const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      options={({ navigation }) => ({
        title: "Hằng ngày",
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