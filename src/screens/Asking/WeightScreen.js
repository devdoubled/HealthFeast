import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";

import AskingBgIcon from "../../components/Asking/AskingBgIcon";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext, askingData, setAskingData }) => {
  const { width } = useWindowDimensions();
  const [isVisibleBtn, setIsVisibleBtn] = useState(true);
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
        <AskingBgIcon />
        <View style={styles.input_container}>
          <TextInput
            value={askingData.weight}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(value) => {
              const formattedValue = value.replace(',', '.');
              setAskingData({ ...askingData, weight: formattedValue });
            }}
            selectionColor="#FFFFFF"
            onFocus={() => setIsVisibleBtn(false)}
            onBlur={() => setIsVisibleBtn(true)}
          />
        </View>
      </View>
      {isVisibleBtn && (
        <View style={[styles.action_container, { width: width - 60 }]}>
          <CustomButton text="Tiếp tục" onPress={handleNext} />
        </View>
      )}
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
    position: "relative",
    marginHorizontal: 30,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input_container: {
    position: "absolute",
    top: 135,
    width: 220,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#9ABF5A",
  },
  input: {
    width: "100%",
    fontFamily: "Montserrat-Medium",
    fontSize: 36,
    textAlign: "center",
    color: "#FFFFFF",
  },
  action_container: {
    position: "absolute",
    bottom: 20,
  },
});
