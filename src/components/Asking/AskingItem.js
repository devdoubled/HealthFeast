import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import ActivityScreen from "../../screens/Asking/ActivityScreen";
import AgeScreen from "../../screens/Asking/AgeScreen";
import DietScreen from "../../screens/Asking/DietScreen";
import GenderScreen from "../../screens/Asking/GenderScreen";
import HeightScreen from "../../screens/Asking/HeightScreen";
import PurposeScreen from "../../screens/Asking/PurposeScreen";
import TargetWeightScreen from "../../screens/Asking/TargetWeightScreen";
import WeightScreen from "../../screens/Asking/WeightScreen";

const AskingItem = ({item, onNext, askingData, setAskingData, navigation }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "gender" && <GenderScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "weight" && <WeightScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "target_weight" && <TargetWeightScreen onNext={onNext} />}
      {item.type === "height" && <HeightScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "age" && <AgeScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "diet" && <DietScreen onNext={onNext} askingData={askingData} setAskingData={setAskingData} />}
      {item.type === "activity" && <ActivityScreen askingData={askingData} setAskingData={setAskingData} navigation={navigation} />}
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
