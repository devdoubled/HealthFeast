import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";
// import askingIcon1 from "../../assets/images/asking_icon_1.png";
// import askingIcon2 from "../../assets/images/asking_icon_2.png";
// import askingIcon3 from "../../assets/images/asking_icon_3.png";
// import askingIcon4 from "../../assets/images/asking_icon_4.png";
// import askingIcon5 from "../../assets/images/asking_icon_5.png";
import CustomButton from "../../components/Auth/CustomButton";
const WeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
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
        {/* <View style={styles.asking_icon}>
          <Image source={askingIcon1} style={styles.icon_1} />
          <Image source={askingIcon2} style={styles.icon_2} />
          <Image source={askingIcon3} style={styles.icon_3} />
          <Image source={askingIcon4} style={styles.icon_4} />
          <Image source={askingIcon5} style={styles.icon_5} />
        </View> */}
        <View style={styles.input_container}>
          <TextInput style={styles.input} placeholder="Kg" />
        </View>
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
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    height: 375,
    backgroundCOlor: "#9ABF5A"
  },
  asking_icon: {
    position: "relative",
    width: "100%",
  },
  icon_1: {
    position: "absolute",
    top: 0,
    left: 50,
  },
  icon_2: {
    position: "absolute",
    top: 30,
    right: 50,
  },
  icon_3: {
    position: "absolute",
    right: 70,
    top: 280,
  },
  icon_4: {
    position: "absolute",
    left: 50,
    top: 330,
  },
  icon_5: {
    position: "absolute",
    right: 75,
    top: 430,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
