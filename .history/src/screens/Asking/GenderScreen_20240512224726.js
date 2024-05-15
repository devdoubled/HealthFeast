import React from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";
import Male from "../../assets/images/gender_male.png"
import Female from "../../assets/images/gender_female.png"
const GenderScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const handleNext = () => {
    onNext();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Giới tính của bạn?</Text>
      <Text style={styles.sub_text}>
        Giới tính là rất quan trọng trong việc tạo ra một kế hoạch giúp bạn đạt
        được kết quả mong muốn
      </Text>
      <View style={[styles.gender_container, { width: width - 60 }]}>
        <TouchableOpacity>
          <Image sr/>
        </TouchableOpacity>
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  );
};

export default GenderScreen;

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
  gender_container: {},
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
