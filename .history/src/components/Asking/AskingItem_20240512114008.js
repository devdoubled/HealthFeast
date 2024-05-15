import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import GenderScreen from "../../screens/Asking/GenderScreen";
import PurposeScreen from "../../screens/Asking/PurposeScreen";
import TargetWeightScreen from "../../screens/Asking/TargetWeightScreen";
import WeightScreen from "../../screens/Asking/WeightScreen";
import HeightScreen from "../../screens/Asking/HeightScreen";

const AskingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen />}
      {item.type === "weight" && <WeightScreen />}
      {item.type === "target_weight" && <TargetWeightScreen />}
      {item.type === "gender" && <GenderScreen />}
      {item.type === "height" && <HeightScreen />}
      {item.type === "weight" && <WeightScreen />}
    </View>
  );
};

export default AskingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
