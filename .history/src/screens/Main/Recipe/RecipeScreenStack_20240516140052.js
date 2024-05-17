import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const RecipeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="RecipeScreen">
      <Stack.Screen name="RecipeScreen" options={{ headerShown: false }}>
        {(props) => <RecipeScreenStack {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="RecipeDetailScreen"
        options={{ title: "Details" }}
      >
         {(props) => <RecipeScreenStack {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RecipeScreenStack;

const styles = StyleSheet.create({});
