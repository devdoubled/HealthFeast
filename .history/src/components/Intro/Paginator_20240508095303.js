import React from "react";
import { StyleSheet, View } from "react-native";

const Paginator = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        return <View style={[styles.dot, { width: 10 }]} key={i.toString()} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#9ABF5A",
    marginHorizontal: 8,
  },
});
