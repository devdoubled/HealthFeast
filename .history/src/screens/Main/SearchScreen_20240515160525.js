import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
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

export default SearchScreen

const styles = StyleSheet.create({})