import React, { useRef } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import OnboardingItem from "../../components/Intro/OnboardingItem";
import slides from "../../data/slides";
const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0));)
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
