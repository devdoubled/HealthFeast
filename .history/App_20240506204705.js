import { StyleSheet, View } from "react-native";
import LoadingScreen from "./src/screens/Welcome/LoadingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
