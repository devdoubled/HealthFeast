import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../../components/Main/HeaderButton';
import UserIcon from "../../assets/images/user_icon.png";
import SearchScreen from '../../screens/Main/SearchScreen';
const Stack = createNativeStackNavigator();
const SearchStack = () => {
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
      {(props) => <SearchScreen {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})