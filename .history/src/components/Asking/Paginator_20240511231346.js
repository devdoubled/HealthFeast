import React from "react";
import { Animated, StyleSheet, View } from "react-native";

const Paginator = () => {
  return <View style={styles.container}>
  {data.map((_, i) => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [10, 30, 10],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={[styles.dot, { width: dotWidth, opacity }]}
        key={i.toString()}
      />
    );
  })}
</View>;
};

export default Paginator;

const styles = StyleSheet.create({});
