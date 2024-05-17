
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import RecipeScreen from "../../screens/Main/R";

const Stack = createNativeStackNavigator();
const RecipeStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

export default RecipeStack