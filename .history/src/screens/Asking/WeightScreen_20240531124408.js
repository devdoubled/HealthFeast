import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import askingIcon1 from "../../assets/images/asking_icon_1.png";
import askingIcon2 from "../../assets/images/asking_icon_2.png";
import askingIcon3 from "../../assets/images/asking_icon_3.png";
import askingIcon4 from "../../assets/images/asking_icon_4.png";
import askingIcon5 from "../../assets/images/asking_icon_5.png";
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
        <Image source={askingIcon1} style={styles.icon_1}/>
        <Image source={askingIcon2} style={styles.icon_2}/>
        <Image source={askingIcon3} style={styles.icon_3}/>
        <Image source={askingIcon4} style={styles.icon_4}/>
        <Image source={askingIcon5} style={styles.icon_5}/>
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
    position: "relative",
    marginHorizontal: 30,
    marginTop: 15,
  },
  icon_1: {
    position: "absolute",
  },
  icon_2: {
    position: "absolute",
  },
  icon_3: {
    position: "absolute",
  },
  icon_4: {
    position: "absolute",
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
