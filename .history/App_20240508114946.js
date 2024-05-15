import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreen from "./src/screens/Intro/LoadingScreen";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";
import HomeScreen from "./src/screens/Main/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  // useEffect(() => {
  //   checkOnboardingStatus();
  // }, []);

  // const checkOnboardingStatus = async () => {
  //   try {
  //     const onboardingStatus = await AsyncStorage.getItem("onboardingStatus");
  //     if (onboardingStatus !== null) {
  //       setHasCompletedOnboarding(true);
  //     }
  //   } catch (error) {
  //     console.error("Error retrieving onboarding status:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
        {hasCompletedOnboarding ? <HomeScreen /> : <OnboardingScreen onComplete={() => setHasCompletedOnboarding(true)}/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
