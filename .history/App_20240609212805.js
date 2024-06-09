import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useContext, useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import AuthStack from "./src/navigation/Auth/AuthStack";
import MainStack from "./src/navigation/Main/MainStack";
import LoadingScreen from "./src/screens/Intro/LoadingScreen";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(null);
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Italic": require("./src/assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
    <AuthProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Stack.Navigator
          initialRouteName={
            user
              ? "MainStack"
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
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
