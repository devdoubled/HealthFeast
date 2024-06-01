import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CustomButton from "../../components/Auth/CustomButton";

const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedWeight, setSelectedWeight] = useState(60);
  const flatListRef = useRef(null);
  const weights = Array.from({ length: 21 }, (_, i) => 50 + i); // [50, 51, ..., 70]
  const ITEM_WIDTH = Dimensions.get("window").width / 5; // Adjust this as needed for item width

  useEffect(() => {
    // Scroll to the selected weight initially
    scrollToWeight(selectedWeight);
  }, []);

  const scrollToWeight = (weight) => {
    const index = weights.indexOf(weight);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: index,
        viewPosition: 0.5,
      });
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleWeightSelection(item)}
      style={styles.itemContainer}
    >
      <Text
        style={[styles.item, item === selectedWeight && styles.selectedItem]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
    scrollToWeight(weight);
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Cân nặng của bạn?</Text>
      <Text style={styles.sub_text}>
        Dùng cân nặng hiện tại như một điểm khởi đầu giúp chúng tôi tạo kế hoạch
        cá nhân hóa cho bạn dễ dàng hơn
      </Text>
      <View style={[styles.weight_container, { width: width - 60 }]}>
        <FlatList
          ref={flatListRef}
          data={weights}
          horizontal
          keyExtractor={(item) => item.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
        />
        <View style={styles.overlay}>
          <Text style={styles.selectedWeightText}>{selectedWeight} Kg</Text>
        </View>
      </View>

      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  );
};

export default WeightScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 30,
    marginTop: 30,
  },
  heading_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
    lineHeight: 20,
  },
  weight_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 30,
  },
  list: {
    alignItems: "center",
  },
  itemContainer: {
    padding: 10,
  },
  item: {
    fontSize: 20,
    color: "black",
  },
  selectedItem: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
