import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Community/NavbarList";

const CommunityBlogScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </View>
  );
};

export default CommunityBlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
