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
      <Svg width={svgSize} height={svgSize}>
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#e6e6e6"
          fill="none"
        />
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#9ABF5A"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.calories}>{`${left}`}</Text>
        <Text style={styles.text}>kCal Left</Text>
        <Text style={styles.text}>D</Text>
      </View>
    </View>
  );
};

export default CaloriesProgress;

const styles = StyleSheet.create({});
