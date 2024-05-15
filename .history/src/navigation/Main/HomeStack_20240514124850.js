import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable } from "react-native";
import HomeScreen from "../../screens/Main/HomeScreen";
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
            <Pressable>
              <Image source={require("../../assets/images/notify_icon.png")} style={}/>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable>
              <Image source={require("../../assets/images/user_icon.png")}/>
            </Pressable>
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