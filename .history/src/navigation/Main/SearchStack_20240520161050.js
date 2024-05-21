import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NotifyIcon from "../../assets/images/notify_icon.png";
import UserIcon from "../../assets/images/user_icon.png";
import HeaderButton from "../../components/Main/HeaderButton";
import SearchMenuScreen from "../../screens/Main/Search/SearchMenuScreen";
import SearchScreen from "../../screens/Main/Search/SearchScreen";
import SearchMealScreen from "../../screens/Main/Search/SearchMealScreen";
const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        options={({ navigation }) => ({
          title: "Tìm kiếm",
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
        {(props) => <SearchScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="SearchMenuScreen"
        options={({ navigation }) => ({
          title: "Thực đơn",
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
        {(props) => <SearchMenuScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="SearchMealScreen"
        options={({ navigation }) => ({
          title: "Bữa ăn",
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
        {(props) => <SearchMealScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchStack;
