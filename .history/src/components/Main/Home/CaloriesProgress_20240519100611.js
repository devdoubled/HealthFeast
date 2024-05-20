import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";
const CaloriesProgress = ({ eaten, left }) => {
  const radius = 95;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset =
    circumference - (circumference * eaten) / (eaten + left);
  return (
    <View>
      <Text>CaloriesProgress</Text>
    </View>
  );
};

export default CaloriesProgress;

const styles = StyleSheet.create({});
