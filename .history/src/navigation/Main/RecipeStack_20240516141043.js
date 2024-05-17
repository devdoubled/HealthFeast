import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import RecipeRecScreen from "../../screens/Main/Recipe/RecipeRecScreen";
import RecipeScreen from "../../screens/Main/Recipe/RecipeScreen";
import RecipePlanScreen from "./../../screens/Main/Recipe/RecipePlanScreen";
import RecipeDetailScreen from "../../screens/Main/Recipe/RecipeDetailScreen";

const Stack = createNativeStackNavigator();
const RecipeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      animation: "slide_from_right", // You can change this to "fade_from_bottom", "slide_from_left", etc.
      animationDuration: 300, // Custom animation duration in milliseconds
      gestureDirection: "horizontal", // Customize the gesture direction if needed
    }}
    >
      <Stack.Screen
        name="RecipeScreen"
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
        {(props) => <RecipeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="RecipeDetailScreen"
        options={({ navigation }) => ({
          title: "Công thức",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerRight: () => <HeaderButton source={NotifyIcon} />
        })}
      >
        {(props) => <RecipeDetailScreen {...props} />}
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
  );
};

export default RecipeStack;