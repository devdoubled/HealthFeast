import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AskingItem = ({ item }) => {
    console.log(item.id);
  return (
    <View style={styles.container}>
      <Text>Text</Text>
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
