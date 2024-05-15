import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={screen}>
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }}>
        {(props) => <LoginScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterScreen" options={{ headerShown: false }}>
        {(props) => <RegisterScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="GetCodeScreen" options={{ headerShown: false }}>
        {(props) => <GetCodeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="EnterPasswordScreen" options={{ headerShown: false }}>
        {(props) => <EnterPasswordScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="ForgetPasswordScreen"
        options={{ headerShown: false }}
      >
        {(props) => <ForgetPasswordScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
