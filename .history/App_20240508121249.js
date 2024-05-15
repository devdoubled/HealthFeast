import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreen from "./src/screens/Intro/LoadingScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
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
      {isLogin ? (

      ) : (<AuthStack/>)}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
