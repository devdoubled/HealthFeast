import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import RecipeDetailScreen from "../../screens/Main/Recipe/RecipeDetailScreen";
import RecipeRecScreen from "../../screens/Main/Recipe/RecipeRecScreen";
import RecipeScreen from "../../screens/Main/Recipe/RecipeScreen";
import RecipePlanScreen from "./../../screens/Main/Recipe/RecipePlanScreen";

const Stack = createNativeStackNavigator();
const RecipeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "none",
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
          animation: "slide_from_right",
          animationDuration: 100, 
          gestureDirection: "horizontal",
          headerBackTitleVisible: false,
          headerRight: () => <HeaderButton source={NotifyIcon} />,
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
