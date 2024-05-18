import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import CaloriesTrackerScreen from "../../screens/Main/Home/CaloriesTrackerScreen";
import HomeScreen from "../../screens/Main/Home/HomeScreen";
import AddMealScreen from "../../screens/Main/Home/AddMealScreen";
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
        })}
      >
        {(props) => <CaloriesTrackerScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddMealScreen"
        // options={({ navigation, route }) => ({
        //   title: "BỮa sáng",
        //   headerTitleAlign: "center",
        //   headerTintColor: "#000",
        //   headerShadowVisible: false,
        //   headerTitleStyle: {
        //     fontFamily: "Montserrat-Medium",
        //     fontSize: 24,
        //   },
        // })}
        options={({ navigation, route }) => {
          const { mealScreen } = route.params || {}; 
      
          let title = "Bữa sáng";
          if (mealType === "A") {
            title = "Bữa trưa";
          } else if (mealType === "dinner") {
            title = "Bữa tối";
          }
      
          return {
            title: title,
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Montserrat-Medium",
              fontSize: 24,
            },
          };
        }}
      >
        {(props) => <AddMealScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
