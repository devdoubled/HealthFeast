import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";

const ITEM_HEIGHT = 50;
const { height: screenHeight } = Dimensions.get("window");
const items = [58,59, 60, 61, 62];

const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedValue, setSelectedValue] = useState(60);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      const selectedIndex = items.indexOf(selectedValue);
      flatListRef.current.scrollToIndex({
        index: selectedIndex,
        animated: true,
      });
    }
  }, [selectedValue]);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(yOffset / ITEM_HEIGHT);
    setSelectedValue(items[index]);
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
          data={items}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingVertical: (screenHeight - ITEM_HEIGHT) / 2 - ITEM_HEIGHT,
          }}
        />
        <View style={styles.highlight}>
          <Text style={styles.label}>{selectedValue} Kg</Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={items}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingVertical: (screenHeight - ITEM_HEIGHT) / 2 - ITEM_HEIGHT,
          }}
        />
        <View style={styles.highlight}>
          <Text style={styles.label}>{selectedValue} Kg</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 24,
    color: "#000",
  },
  highlight: {
    position: "absolute",
    top: (screenHeight - ITEM_HEIGHT) / 2,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(106, 176, 74, 0.2)",
  },
  label: {
    fontSize: 24,
    color: "#6AB04A",
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
