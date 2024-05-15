import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import VerifyScreen from "../screens/Auth/GetCodeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
const Stack = createNativeStackNavigator();
const AuthStack = ({ route }) => {
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
    </Stack.Navigator>
  );
};

export default AuthStack;
