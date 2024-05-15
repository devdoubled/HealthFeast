import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import PurposeScreen from "../../screens/Asking/PurposeScreen";
import WeightScreen from "../../screens/Asking/WeightScreen";

const AskingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen />}
      {item.type === "weight" && <WeightScreen />}
      {item.type === "ta" && <WeightScreen />}
      {item.type === "weight" && <WeightScreen />}
      {item.type === "weight" && <WeightScreen />}
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
