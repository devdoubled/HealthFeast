import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const AskingItem = ({ item }) => {
  console.log("Item type:", item.type);
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Text>{item.type}</Text>
    </View>
  );
};

export default AskingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
