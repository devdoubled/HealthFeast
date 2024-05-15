import React from "react";
import { StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View>
      <View>
        <Imag
          source={require("@expo/snack-static/react-native-logo.png")}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  wrapper: {},
  container: {},
});
