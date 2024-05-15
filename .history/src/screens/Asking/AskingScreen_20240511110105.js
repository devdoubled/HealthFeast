import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import asking from "../../data/asking";
const AskingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
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
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator data={asking} scrollX={scrollX} />
    </View>
  );
};

export default AskingScreen;

const styles = StyleSheet.create({});
