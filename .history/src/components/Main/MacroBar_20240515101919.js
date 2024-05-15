import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MacroBar = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text style={styles.value}>{`${value}g`}</Text>
    </View>
  );
};

export default MacroBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontFamily: "Montserrat Regular"
    fontSize: 12,
    color: "#B4B4B4",
  },
  barContainer: {
    width: 100,
    height: 3,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    overflow: "hidden",
    marginVer
  },
  bar: {
    height: "100%",
    borderRadius: 5,
  },
  value: {
    fontSize: 14,
    color: "#333",
    paddingLeft: 5,
  },
});
