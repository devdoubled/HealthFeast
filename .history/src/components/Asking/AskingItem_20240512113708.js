import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const AskingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      {item.type === "purpose" }
    </View>
  );
};

export default AskingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
