import { StyleSheet, View } from "react-native";
import OnboardingScreen from "./src/screens/Intro/OnboardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
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
