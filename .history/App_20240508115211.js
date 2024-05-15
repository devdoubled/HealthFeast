import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreen from "./src/screens/Intro/LoadingScreen";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";
import HomeScreen from "./src/screens/Main/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  // useEffect(() => {
  //   checkOnboardingStatus();
  // }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewOnboarding");
      if(value !== null) {
        
      }
    } catch {
    } finally {
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {hasCompletedOnboarding ? (
        <HomeScreen />
      ) : (
        <OnboardingScreen onComplete={() => setHasCompletedOnboarding(true)} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});