import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GetCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GetCodeScreen</Text>
    </View>
  );
};

export default GetCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
});
