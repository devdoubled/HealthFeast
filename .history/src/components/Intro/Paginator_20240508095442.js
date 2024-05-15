import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        
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
    borderRadius: 10,
    backgroundColor: "#9ABF5A",
    marginHorizontal: 8,
  },
});
