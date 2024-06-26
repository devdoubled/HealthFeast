import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import Paginator from "../../components/Asking/Paginator";
import askingOptions from "../../data/askingOptions";
const AskingScreen = ({ navigation, route }) => {
  const { userId } = route.params
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [askingData, setAskingData] = useState({
    accountId: userId,
    gender: 1,
    weight: 0,
    height: 0,
    activityLevel: 0,
    currentPlan: 1,
    carbPropotion: 0,
    age: 0
  })

  const scrollToNextSlide = () => {
    if (slideRef.current && currentIndex < askingOptions.length - 1) {
      slideRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handleNextPress = () => {
    if (currentIndex === askingOptions.length - 1) {
      return;
    }
    scrollToNextSlide();
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  return (
    <View style={styles.container}>
      <Paginator data={askingOptions} scrollX={scrollX} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={askingOptions}
          renderItem={({ item }) => (
            <AskingItem item={item} onNext={handleNextPress} askingData={askingData} setAskingData={setAskingData} navigation={navigation} />
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
          onViewableItemsChanged={onViewableItemsChanged}
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
    paddingTop: 75,
    backgroundColor: "#ffffff",
  },
  flatListContainer: {
    flex: 3,
  },
});
