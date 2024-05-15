import React, { useRef } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import Paginator from "../../components/Asking/Paginator";
import askingOptions from "../../data/askingOptions";
const AskingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <Paginator data={askingOptions} scrollX={scrollX} />
      <View style={{flex: 3}}>
        <FlatList
          data={askingOptions}
          renderItem={({ item }) => <AskingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
    </View>
  );
};

export default AskingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});
