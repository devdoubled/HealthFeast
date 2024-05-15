import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AskingItem from "../../components/Asking/AskingItem";
import askingOptions from "../../data/askingOptions";
const AskingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={askingOptions}
        renderItem={({ item }) => (
          <AskingItem
            item={item}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      />
    </View>
  );
};

export default AskingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    pad
  },
});
