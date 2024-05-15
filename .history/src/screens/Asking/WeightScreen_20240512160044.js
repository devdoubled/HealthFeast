import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedWeight, setSelectedWeight] = useState(50); 

  const weightOptions = Array.from({ length: 100 }, (_, index) => `${index + 1} kg`); 

  const handleWeightChange = (newValue) => {
    setSelectedWeight(newValue);
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
      <View>
      {/* <WheelPicker
        data={weightOptions}
        onValueChange={handleWeightChange}
        selectedItem={selectedWeight - 1} 
        backgroundColor="white"
        textColor="#333"
        itemTextColor="#333"
        selectedItemTextColor="#000"
        indicatorColor="#000"
        style={styles.wheelPicker}
      /> */}
      </View>
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
    marginTop: 50,
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
  action_container: {
    position: "absolute",
    bottom: 40,
  },
  wheelPicker: {
    width: 200,
    height: 150,
  },
});
