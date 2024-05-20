import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealBar = ({ label, value, maxValue, color }) => {
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

export default MealBar;

const styles = StyleSheet.create({});
