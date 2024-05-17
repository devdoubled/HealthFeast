import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();
const RecipeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="RecipeScreen">
      <Stack.Screen name="RecipeScreen" options={{ headerShown: false }}>
        {(props) => <RecipeScreen {...props} />}
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
