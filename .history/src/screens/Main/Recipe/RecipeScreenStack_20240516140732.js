import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RecipeDetailScreen from "./RecipeDetailScreen";
import RecipeScreen from "./RecipeScreen";
const Stack = createNativeStackNavigator();
const RecipeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="RecipeScreen">
      {/* <Stack.Screen name="RecipeScreen" options={{ headerShown: false }}>
        {(props) => <RecipeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="RecipeDetailScreen"
        options={{ title: "Công thức", headerShown: false }}
      >
         {(props) => <RecipeDetailScreen {...props} />}
        </Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default RecipeScreenStack;
