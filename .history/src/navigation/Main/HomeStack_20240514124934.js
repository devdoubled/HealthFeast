import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
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
              <Image source={require("../../assets/images/notify_icon.png")} style={styles.image_icon}/>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable>
              <Image source={require("../../assets/images/user_icon.png")} style={styles.image_icon}/>
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
  image_icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  }
})