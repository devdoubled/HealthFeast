import React from "react";
import { StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import AskingBgIcon from "../../components/Asking/AskingBgIcon";
import CustomButton from "../../components/Auth/CustomButton";

const OldScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const handleNext = () => {
    onNext();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Bạn bao nhiêu tuổi?</Text>
      <Text style={styles.sub_text}>
      Độ tuổi của bạn đóng vai trò quan trọng trong việc xác định nhu cầu dinh dưỡng và cân nặng lý tưởng. Tuy nhiên thông tin này sẽ vẫn
        ở chế độ riêng tư
      </Text>
      <View style={[styles.age_container, { width: width - 60 }]}>
        <AskingBgIcon/>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="tuổi"
            keyboardType="numeric"
            placeholderTextColor="#FFFFFF"
          />
        </View>
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  );
};

export default OldScreen;

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
    fontFamily: "Montserrat-Medium",
    fontSize: 36,
    color: "#FFFFFF"
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
