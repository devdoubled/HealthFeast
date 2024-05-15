import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Paginator = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Paginator</Text>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
});
