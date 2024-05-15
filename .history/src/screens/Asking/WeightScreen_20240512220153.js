import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [selectedWeight, setSelectedWeight] = useState(40);
  const handleNext = () => {
    onNext();
  };
  const renderWeightPicker = () => {
    let items = [];
    for (let i = 40; i <= 130; i++) {
      items.push(<Picker.Item label={`${i} kg`} value={i} key={i} />);
    }
    return items;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Cân nặng của bạn?</Text>
      <Text style={styles.sub_text}>
        Dùng cân nặng hiện tại như một điểm khởi đầu giúp chúng tôi tạo kế hoạch
        cá nhân hóa cho bạn dễ dàng hơn
      </Text>
      <View style={[styles.weight_container, { width: width - 70 }]}>
        <Picker
          selectedValue={selectedWeight}
          style={{ width: "100%", height: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}
        >
          {renderWeightPicker()}
        </Picker>
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
    marginVertical: 20,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
