import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import AuthStack from "./src/navigation/AuthStack";
import MainStack from "./src/navigation/MainStack";
import LoadingScreen from "./src/screens/Intro/LoadingScreen";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewOnboarding");
      if (value !== null) {
        setViewOnboarding(true);
      } else {
        setViewOnboarding(false);
      }
    } catch (error) {
      console.log("Error @checkOnboarding: ", error);
      setIsLoading(false);
    }
  };

  if (isLoading || !fontsLoaded || viewOnboarding === null) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content" // Customize StatusBar style
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator
        initialRouteName={
          isLogin
            ? viewOnboarding
              ? "MainStack"
              : "OnboardingScreen"
            : viewOnboarding
            ? "AuthStack"
            : "OnboardingScreen"
        }
      >
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
