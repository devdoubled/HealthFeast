import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecipeScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "none",
      }}
    >
      <Stack.Screen
        name="RecipeScreenStack"
        options={({ navigation }) => ({
          title: "Công thức",
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
        {(props) => <RecipeScreenStack {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="RecipePlanScreen"
        options={({ navigation }) => ({
          title: "Kế hoạch",
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
        {(props) => <RecipePlanScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="RecipeRecScreen"
        options={({ navigation }) => ({
          title: "Gợi ý",
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
        {(props) => <RecipeRecScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default RecipeScreenStack

const styles = StyleSheet.create({})