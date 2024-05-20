import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import CaloriesIcon from "../../../assets/images/calories_icon.png";
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
        <Image source={CaloriesIcon} style={styles.icon_img}/>
        <Text style={styles.calories}>
          {`${target - eaten}`} <Text style={styles.text_calories}>kCal</Text>
        </Text>
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
  icon_img: {
    marginBottom: 8
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
  text_status: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
