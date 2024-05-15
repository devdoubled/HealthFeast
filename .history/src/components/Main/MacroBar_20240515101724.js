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
    fontSize: 14,
    color: "#333",
  },
  barContainer: {
    flex: 1,
    height: 5,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 5,
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingLeft: 5,
  },
});
