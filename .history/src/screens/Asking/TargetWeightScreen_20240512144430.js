import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const TargetWeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <Text>TargetWeightScreen</Text>
    </View>
  );
};

export default TargetWeightScreen;

const styles = StyleSheet.create({});
