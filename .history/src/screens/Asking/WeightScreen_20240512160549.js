import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import WheelPicker from "react-native-wheely";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      <Wheely
        data={[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]}
        onChange={handleOnChange}
        selectedIndex={weight - 50}
        itemStyle={styles.itemStyle}
        activeItemStyle={styles.activeItemStyle}
        labelText="Kg"
        labelStyle={styles.labelStyle}
      />
      <Text style={styles.weightText}>{weight} Kg</Text>
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
