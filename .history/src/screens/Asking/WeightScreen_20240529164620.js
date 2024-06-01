import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import CustomButton from "../../components/Auth/CustomButton";
import Wheely from 'react-native-wheely';
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedValue, setSelectedValue] = useState(60);
  const items = [59, 60, 61, 62];

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
        <Wheely
        items={items}
        selectedIndex={items.indexOf(selectedValue)}
        onChange={(index) => setSelectedValue(items[index])}
        itemHeight={50}
        visibleRest={1}
        containerStyle={styles.picker}
        itemStyle={styles.itemStyle}
        highlightBorderColor="rgba(106, 176, 74, 0.2)"
      />
      <Text style={styles.label}>{selectedValue} Kg</Text>
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
    marginHorizontal: 30,
  },
  picker: {
    width: 150,
    height: 150,
  },
  itemStyle: {
    color: '#000',
    fontSize: 24,
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    color: '#6AB04A',
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
