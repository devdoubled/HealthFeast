import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import AddMealScreen from "../../screens/Main/Home/AddMealScreen";
import CaloriesTrackerScreen from "../../screens/Main/Home/CaloriesTrackerScreen";
import HomeScreen from "../../screens/Main/Home/HomeScreen";
import MealResultDetailScreen from "../../screens/Main/Home/MealResultDetailScreen";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
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
      <Stack.Screen
        name="CaloriesTrackerScreen"
        options={({ navigation }) => ({
          title: "Đo Calo",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerBackTitleVisible: false,
        })}
      >
        {(props) => <CaloriesTrackerScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddMealScreen"
        options={({ navigation }) => ({
          title: "Thêm vào bữa ăn",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerBackTitleVisible: false,
        })}
      >
        {(props) => <AddMealScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="MealResultDetailScreen"
        options={({ navigation }) => ({
          title: "Thêm vào bữa ăn",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerBackTitleVisible: false,
        })}
      >
        {(props) => <MealResultDetailScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Excerc"
        options={({ navigation }) => ({
          title: "Thêm vào bữa ăn",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerBackTitleVisible: false,
        })}
      >
        {(props) => <Excerc {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
