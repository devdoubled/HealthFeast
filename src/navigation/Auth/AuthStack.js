import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AskingScreen from "../../screens/Asking/AskingScreen";
import EnterPasswordScreen from "../../screens/Auth/EnterPasswordScreen";
import ForgetPasswordScreen from "../../screens/Auth/ForgetPasswordScreen";
import GetCodeScreen from "../../screens/Auth/GetCodeScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import RegisterScreen from "../../screens/Auth/RegisterScreen";
import AskingResultScreen from "../../screens/Asking/AskingResultScreen";
const Stack = createNativeStackNavigator();
const AuthStack = ({ route }) => {
  const { screen } = route.params ? route.params : { screen: "LoginScreen" };
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
      <Stack.Screen
        name="AskingScreen"
        options={{ headerShown: false }}
      >
        {(props) => <AskingScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="AskingResultScreen"
        options={{ headerShown: false }}
      >
        {(props) => <AskingResultScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
