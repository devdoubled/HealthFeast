import React, { useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
const AskingScreen = () => {
  const askingRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  return <View style={styles.container}></View>;
};

export default AskingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
