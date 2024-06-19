import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import AskingBgIcon from "../../components/Asking/AskingBgIcon";
import CustomButton from "../../components/Auth/CustomButton";

const HeightScreen = ({ onNext, askingData, setAskingData }) => {
  const { width } = useWindowDimensions();
  const handleNext = () => {
    onNext();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Chiều cao của bạn?</Text>
      <Text style={styles.sub_text}>
        Đo lường chiều cao đóng vai trò quan trọng trong việc xác định kế hoạch
        lý tưởng và ảnh hưởng đến nhu cầu calo và chất dinh dưỡng
      </Text>
      <View style={[styles.height_container, { width: width - 60 }]}>
        <AskingBgIcon />
        <View style={styles.input_container}>
          <TextInput
            value={askingData.height}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(value) => {
              const formattedValue = value.replace(',', '.');
              setAskingData({ ...askingData, height: formattedValue });
            }}
            selectionColor="#FFFFFF"
          />
        </View>
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  );
};

export default HeightScreen;

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
  height_container: {
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
