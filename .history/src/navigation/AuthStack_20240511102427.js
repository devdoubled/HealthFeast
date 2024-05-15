import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EnterPasswordScreen from "../screens/Auth/EnterPasswordScreen";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import GetCodeScreen from "../screens/Auth/GetCodeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
const Stack = createNativeStackNavigator();
const AuthStack = ({ route, isLogin }) => {
  const { screen } = route.params;
  return (
    <Stack.Navigator initialRouteName={screen ? screen : "LoginScreen"}>
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

export default AuthStack;
