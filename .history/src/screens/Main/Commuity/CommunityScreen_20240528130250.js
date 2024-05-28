import React from "react";
import { Platform, Dimensions, StyleSheet } from "react-native";

const CommunityScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return <View style={styles.container}>
    <NavbarList width={width} navigation={navigation} route={route} />
  </View>;
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
