import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import React from 'react'

const NutritionProgress = ({ nutrition, target }) => {
    const radius = 50;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset = circumference * (1 - nutrition / target);
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
        <Text style={styles.calories}>
          {`${nutrition}`} <Text style={styles.text_calories}>g</Text>
        </Text>
      </View>
    </View>
  )
}

export default NutritionProgress

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
      icon_img: {
        marginBottom: 8,
      },
      calories: {
        fontFamily: "Montserrat-Medium",
        fontSize: 30,
        color: "#FFFFFF",
      },
      text_calories: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
        color: "#B4B4B4",
      },
})