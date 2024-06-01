import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AskingResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AskingResultScreen</Text>
    </View>
  );
};

export default AskingResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: "red",
  },
});
