import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ResultImg from "../../assets/images/result_img.png";
import { getBMIDescription, getBMRDescription, getTDEEDescription } from "../../utils/getStatisticDescription "
const AskingResultScreen = ({ route }) => {
  const { info } = route.params
  const { width } = useWindowDimensions();
  const roundToOneDecimal = (value) => {
    return parseFloat(value).toFixed(1);
  };
  const bmiDescription = getBMIDescription(info.bmi);
  const bmrDescription = getBMRDescription(info.bmr);
  const tdeeDescription = getTDEEDescription(info.tdee);
  return (
    <View style={styles.container}>
      <Text style={styles.reult_title}>Dữ liệu của bạn</Text>
      <Image source={ResultImg} style={styles.result_img} />
      <ScrollView
        style={[styles.result_info, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.result_item}>
            <View style={styles.result_topic}>
                <Text style={styles.topic}>Chiều cao</Text>
                <Text style={styles.topic_desc}></Text>
            </View>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              {info.height} <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}></Text>
          </View>
        </View>
        <View style={styles.result_item}>
        <View style={styles.result_topic}>
                <Text style={styles.topic}>Cân nặng</Text>
                <Text style={styles.topic_desc}></Text>
            </View>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              {info.weight} <Text style={styles.unit}>kg</Text>
            </Text>
            <Text style={styles.description}></Text>
          </View>
        </View>
        <View style={styles.result_item}>
        <View style={styles.result_topic}>
                <Text style={styles.topic}>BMI</Text>
                <Text style={styles.topic_desc}>Chỉ số khối cơ thể</Text>
            </View>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              {roundToOneDecimal(info.bmi)} <Text style={styles.unit}>BMI</Text>
            </Text>
            <Text style={styles.description}>{bmiDescription}.</Text>
          </View>
        </View>
        <View style={styles.result_item}>
        <View style={styles.result_topic}>
                <Text style={styles.topic}>BMR</Text>
                <Text style={styles.topic_desc}>Tỷ lệ trao đổi chất cơ bản</Text>
            </View>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              {roundToOneDecimal(info.bmr)} <Text style={styles.unit}>BMR</Text>
            </Text>
            <Text style={styles.description}>{bmrDescription}.</Text>
          </View>
        </View>
        <View style={styles.result_item}>
        <View style={styles.result_topic}>
                <Text style={styles.topic}>TDEE</Text>
                <Text style={styles.topic_desc}>Tổng chi tiêu năng lượng hàng ngày</Text>
            </View>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              {roundToOneDecimal(info.tdee)} <Text style={styles.unit}>kCal</Text>
            </Text>
            <Text style={styles.description}>{tdeeDescription}.</Text>
          </View>
        </View>
        <Pressable style={({ pressed }) => [styles.action_btn, pressed && styles.btn_pressed]}>
          <Text style={styles.action_text}>Tạo kế hoạch cá nhân của bạn</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AskingResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: "#ffffff",
  },
  reult_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24,
    color: "#000000",
    marginHorizontal: 16,
  },
  result_img: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  result_info: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  result_item: {
    width: "100%",
    height: 130,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#F3F2F1",
  },
  result_topic: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  topic: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#B266FD",
  },
  topic_desc: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#B4B4B4",
    textAlign: "right"
  },
  result_value: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  value: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  unit: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#B4B4B4",
  },
  description: {
    width: 170,
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    textAlign: "right",
    color: "#B4B4B4",
  },
  action_btn: {
    paddingVertical: 12,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#9ABF5A",
  },
  action_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  btn_pressed: {
    opacity: 0.9,
  },
});
