import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AskingItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.type}</Text>
    </View>
  );
};

export default AskingItem;

const styles = StyleSheet.create({});
