import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

const NutritionProgress = ({ label, color, nutrition, target, isMiddle }) => {
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset = circumference * (1 - nutrition / target);
  return (
    <View style={[styles.container, isMiddle ? { marginHorizontal: 4 } : {}]}>
      <Svg width={svgSize} height={svgSize}>
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#F3F2F1"
          fill="none"
        />
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.nutrition}>{nutrition}g</Text>
        <Text style={styles.nutrition_text}>{label}</Text>
      </View>
    </View>
  );
};

export default NutritionProgress;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  nutrition: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  nutrition_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#B4B4B4",
    marginTop: 5,
  },
});
