import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import Paginator from "../../components/Asking/Paginator";
import askingOptions from "../../data/askingOptions";
const AskingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousScreenType, setPreviousScreenType] = useState(null);

  // Function to scroll to the next slide
  const scrollToNextSlide = () => {
    if (slideRef.current && currentIndex < askingOptions.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to scroll to the previous slide or the previous screen type
  const scrollToPrevSlide = () => {
    if (slideRef.current && currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
      setCurrentIndex(currentIndex - 1);
    } else if (previousScreenType) {
      const prevIndex = askingOptions.findIndex((item) => item.type === previousScreenType);
      if (prevIndex !== -1) {
        slideRef.current.scrollToIndex({ index: prevIndex, animated: true });
        setCurrentIndex(prevIndex);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Paginator data={askingOptions} scrollX={scrollX} />
      <View style={{ flex: 3 }}>
        <FlatList
          data={askingOptions}
          renderItem={({ item }) => (
            <AskingItem item={item} onNext={() => {
              setPreviousScreenType(item.type);
              scrollToNextSlide();
            }}
            onPrev={() => {
              setPreviousScreenType(null);
              scrollToPrevSlide();
            }} />
          )}
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
    marginTop: 75,
  },
});
