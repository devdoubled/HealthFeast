import React, { useState } from "react";
import { StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import AskingBgIcon from "../../components/Asking/AskingBgIcon";
import CustomButton from "../../components/Auth/CustomButton";

const AgeScreen = ({ onNext, askingData, setAskingData }) => {
  const { width } = useWindowDimensions();
  const [isVisibleBtn, setIsVisibleBtn] = useState(true);

  const handleNext = () => {
    onNext();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Bạn bao nhiêu tuổi?</Text>
      <Text style={styles.sub_text}>
        Độ tuổi của bạn đóng vai trò quan trọng trong việc xác định nhu cầu dinh dưỡng và cân nặng lý tưởng. Thông tin này sẽ vẫn
        ở chế độ riêng tư
      </Text>
      <View style={[styles.age_container, { width: width - 60 }]}>
        <AskingBgIcon />
        <View style={styles.input_container}>
          <TextInput
            value={askingData.age}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(value) => setAskingData({ ...askingData, age: value })}
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

export default AgeScreen;

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
    textAlign: "center",
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
    lineHeight: 20,
  },
  age_container: {
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
