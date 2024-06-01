import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import askingBg from "../../assets/images/asking_bg.png";
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
        <ImageBackground
          source={askingBg}
          style={styles.image_bg}
          imageStyle={styles.imageStyle}
        ></ImageBackground>
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
    marginTop: 15,
  },
  image_bg: {
    width: "90%",
    height: 450,
    resizeMode: "cover",
  },
  imageStyle: {
    height: "100%",
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
