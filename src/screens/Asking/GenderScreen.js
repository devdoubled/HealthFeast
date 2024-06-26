import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Female from "../../assets/images/gender_female.png";
import Male from "../../assets/images/gender_male.png";
import CustomButton from "../../components/Auth/CustomButton";
const GenderScreen = ({ onNext, askingData, setAskingData }) => {
  const { width } = useWindowDimensions();
  const [selectedGender, setSelectedGender] = useState(askingData.gender);
  const handleNext = () => {
    onNext();
  };

  const handlePressGender = () => {
    const newSelectedGender = selectedGender === 1 ? 2 : 1;
    setSelectedGender(newSelectedGender);
    setAskingData({ ...askingData, gender: newSelectedGender });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Giới tính của bạn?</Text>
      <Text style={styles.sub_text}>
        Giới tính là rất quan trọng trong việc tạo ra một kế hoạch giúp bạn đạt
        được kết quả mong muốn
      </Text>
      <View style={[styles.gender_container, { width: width - 60 }]}>
        <TouchableOpacity
          style={[
            styles.gender_item,
            {
              backgroundColor:
                selectedGender === 1 ? "#F5CF46" : "#F3F2F1",
            },
          ]}
          onPress={handlePressGender}
        >
          <Image source={Male} style={styles.gender_img} />
          <Text style={styles.gender_text}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.gender_item,
            {
              marginTop: 15,
              backgroundColor:
                selectedGender === 2 ? "#B266FD" : "#F3F2F1",
            },
          ]}
          onPress={handlePressGender}
        >
          <Image source={Female} style={styles.gender_img} />
          <Text style={styles.gender_text}>Nữ</Text>
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
  gender_container: {
    marginTop: 70,
  },
  gender_item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: "#F3F2F1",
  },
  gender_img: {
    width: 50,
    height: 50,
  },
  gender_text: {
    marginLeft: 30,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#000000",
  },
  action_container: {
    position: "absolute",
    bottom: 20,
  },
});
