import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";

const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedWeight, setSelectedWeight] = useState(60);
  const weights = Array.from({ length: 30 }, (_, i) => 40 + i);  // Generates weights from 40 to 69

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, item === selectedWeight && styles.selectedItem]}
      onPress={() => setSelectedWeight(item)}
    >
      <Text style={styles.itemText}>{item} Kg</Text>
    </TouchableOpacity>
  );
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
      {/* <View style={[styles.weight_container, { width: width - 70 }]}></View> */}
      <FlatList
        data={weights}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        extraData={selectedWeight}
        style={styles.list}
      />
      <View style={[styles.action_container, { width: width - 70 }]}>
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
  list: {
    width: '100%'
  },
  item: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedItem: {
    backgroundColor: '#cfe9f3'  // Change the color for selected item
  },
  itemText: {
    fontSize: 18,
    color: '#000'
  }
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
