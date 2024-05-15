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
      <Text style={styles.value}>{`${value}g left`}</Text>
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
    fontFamily: "Montserrat Regular",
    fontSize: 15,
    color: "#B4B4B4",
  },
  barContainer: {
    width: 100,
    height: 3,
    borderRadius: 5,
    marginVertical: 8,
    backgroundColor: "#F3F2F1",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 5,
  },
  value: {
    fontFamily: "Montserrat Regular",
    fontSize: 14,
    color: "#000000",
  },
});
