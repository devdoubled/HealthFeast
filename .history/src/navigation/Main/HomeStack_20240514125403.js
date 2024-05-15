import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import HomeScreen from "../../screens/Main/HomeScreen";
import NotifyIcon from "../../assets/images/notify_icon.png"
import UserIcon from "../../assets/images/user_icon.png"
import HeaderButton from "../../components/Main/HeaderButton";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={({ navigation }) => ({
          title: "Hằng ngày",
          headerTitleAlign: 'center',
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
          },
          headerRight: () => (
            <HeaderButton source={No}/>
          ),
          headerLeft: () => (
            
          ),
        })}
      >
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  
})