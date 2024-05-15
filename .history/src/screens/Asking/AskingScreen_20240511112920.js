import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import Paginator from "../../components/Asking/Paginator";
import asking from "../../data/asking";
const AskingScreen = () => {
  const askingRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Paginator data={asking} scrollX={scrollX} />
      <View>
        <FlatList
          data={asking}
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
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={askingRef}
        />
      </View>
    </View>
  );
};

export default AskingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100,
  },
});
