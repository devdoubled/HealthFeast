import React from "react";
import { StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../../../")}
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
