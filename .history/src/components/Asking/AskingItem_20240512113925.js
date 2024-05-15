import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import PurposeScreen from "../../screens/Asking/PurposeScreen";

const AskingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.type === "purpose" && <PurposeScreen />}
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
