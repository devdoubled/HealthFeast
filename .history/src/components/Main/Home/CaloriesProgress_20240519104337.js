import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
const CaloriesProgress = ({ eaten, target }) => {
  const radius = 100;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset = circumference * (1 - eaten / target);
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
        <Text style={styles.calories}>{`${target - eaten}`}</Text>
        <Text style={styles.text}>kCal Left</Text>
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
    fontSize: 30,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#B4B4B4",
    marginVertical: 10,
  },
  text_status: {
    fontFamily: "Montserrat-Medium",
    fontSize: 19,
    color: "#FFFFFF",
  },
});
