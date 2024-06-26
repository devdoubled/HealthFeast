import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import AddMealScreen from "../../screens/Main/Home/AddMealScreen";
import CaloriesTrackerScreen from "../../screens/Main/Home/CaloriesTrackerScreen";
import ExerciseDetailScreen from "../../screens/Main/Home/ExerciseDetailScreen";
import ExerciseScreen from "../../screens/Main/Home/ExerciseScreen";
import HomeScreen from "../../screens/Main/Home/HomeScreen";
import MealResultDetailScreen from "../../screens/Main/Home/MealResultDetailScreen";
import PremiumScreen from "../../screens/Main/Setting/PremiumScreen";
import PaymentScreen from "../../screens/Main/Setting/PaymentScreen";
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
        name="ExerciseScreen"
        options={({ navigation }) => ({
          title: "Bài tập",
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
        {(props) => <ExerciseScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="ExerciseDetailScreen"
        options={({ navigation }) => ({
          title: "Bài tập",
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
        {(props) => <ExerciseDetailScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="PremiumScreen"
        options={({ navigation }) => ({
          title: "Đăng kí Premium",
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
        {(props) => <PremiumScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="PaymentScreen"
        options={({ navigation }) => ({
          title: "Thanh toán",
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
        {(props) => <PaymentScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
