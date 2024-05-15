import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import GenderScreen from "../../screens/Asking/GenderScreen";
import HeightScreen from "../../screens/Asking/HeightScreen";
import OldScreen from "../../screens/Asking/OldScreen";
import PurposeScreen from "../../screens/Asking/PurposeScreen";
import TargetWeightScreen from "../../screens/Asking/TargetWeightScreen";
import WeightScreen from "../../screens/Asking/WeightScreen";

const AskingItem = ({ item }) => {
    
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen />}
      {item.type === "weight" && <WeightScreen />}
      {item.type === "target_weight" && <TargetWeightScreen />}
      {item.type === "gender" && <GenderScreen />}
      {item.type === "height" && <HeightScreen />}
      {item.type === "old" && <OldScreen />}
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
