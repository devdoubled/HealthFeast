import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import GenderScreen from "../../screens/Asking/GenderScreen";
import HeightScreen from "../../screens/Asking/HeightScreen";
import OldScreen from "../../screens/Asking/OldScreen";
import PurposeScreen from "../../screens/Asking/PurposeScreen";
import TargetWeightScreen from "../../screens/Asking/TargetWeightScreen";
import WeightScreen from "../../screens/Asking/WeightScreen";
import ActivityScreen from "../../screens/Asking/ActivityScreen";

const AskingItem = ({ item, onNext }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen onNext={onNext}/>}
      {item.type === "weight" && <WeightScreen onNext={onNext}/>}
      {item.type === "target_weight" && <TargetWeightScreen onNext={onNext}/>}
      {item.type === "gender" && <GenderScreen onNext={onNext}/>}
      {item.type === "height" && <HeightScreen onNext={onNext}/>}
      {item.type === "old" && <OldScreen onNext={onNext}/>}
      {item.type === "activity" && <ActivityScreen />}
      {item.type === "diet" && <DietScreen />}
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