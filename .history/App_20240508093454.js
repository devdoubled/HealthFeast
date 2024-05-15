import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";
import {useF}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <OnboardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
