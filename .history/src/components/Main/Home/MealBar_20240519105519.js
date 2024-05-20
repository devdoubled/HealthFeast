import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealBar = ({ label, value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.value}>{`${value} \ ${maxValue} kCal`}</Text>
    </View>
  );
};

export default MealBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
  barContainer: {
    width: 100,
    height: 3,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: "#B4B4B4",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#9ABF5A",
  },
  value: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#FFFFFF",
  },
});
