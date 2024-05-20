import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";
const CaloriesProgress = ({ eaten, target }) => {
  const radius = 95;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset =
    circumference - (circumference * eaten) / (eaten + left);
  return (
    <View style={styles.container}>
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
        <Text style={styles.text}>kCal</Text>
        <Text style={styles.text_status}>Duy trì</Text>
      </View>
    </View>
  );
};

export default CaloriesProgress;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  calories: {
    fontFamily: "Montserrat-Medium",
    fontSize: 28,
    color: "#231F20",
    marginVertical: 8,
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#B4B4B4",
  },
  text_status: {},
});
