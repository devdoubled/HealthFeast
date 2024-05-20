import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealBar = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <View>
      <Text>MealBar</Text>
    </View>
  );
};

export default MealBar;

const styles = StyleSheet.create({});
