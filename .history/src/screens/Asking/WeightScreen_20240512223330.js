import Slider from '@react-native-community/slider';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const handleNext = () => {
    onNext();
  };
  const [weight, setWeight] = useState(50); // Initial weight
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Cân nặng của bạn?</Text>
      <Text style={styles.sub_text}>
        Dùng cân nặng hiện tại như một điểm khởi đầu giúp chúng tôi tạo kế hoạch
        cá nhân hóa cho bạn dễ dàng hơn
      </Text>
      {/* <View style={[styles.weight_container, { width: width - 70 }]}></View> */}
      <Text style={styles.weightDisplay}>{weight} Kg</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={100}
        step={1}
        value={weight}
        onValueChange={setWeight}
        minimumTrackTintColor="#1FB28A"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#B9E4C9"
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
  weightDisplay: {
    fontSize: 30,
    margin: 10,
  },
  slider: {
    width: 300,
    height: 40,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});