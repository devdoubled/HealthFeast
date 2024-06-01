import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ResultImg from "../../assets/images/result_img.png";
const AskingResultScreen = () => {
  const { width } = useWindowDimensions();
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
          <Text style={styles.result_topic}>Chiều cao</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              170 <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}></Text>
          </View>
        </View>
        <View style={styles.result_item}>
          <Text style={styles.result_topic}>Cân nặng</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              170 <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}></Text>
          </View>
        </View>
        <View style={styles.result_item}>
          <Text style={styles.result_topic}>BMR</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              170 <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}>
              Mức độ nguy hiểm đến sức khoẻ trung bình. f
            </Text>
          </View>
        </View>
        <View style={styles.result_item}>
          <Text style={styles.result_topic}>BMI</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              170 <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}>Ít vận động.</Text>
          </View>
        </View>
        <View style={styles.result_item}>
          <Text style={styles.result_topic}>TDEE</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              170 <Text style={styles.unit}>cm</Text>
            </Text>
            <Text style={styles.description}></Text>
          </View>
        </View>
        <View style={styles.result_item}>
          <Text style={styles.result_topic}>Mức độ hoạt động thể chất</Text>
          <View style={styles.result_value}>
            <Text style={styles.value}>
              1.5 <Text style={styles.unit}>PAL</Text>
            </Text>
            <Text style={styles.description}>Ít vận động.</Text>
          </View>
        </View>
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
    marginBottom: 20,
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
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#B266FD",
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
});
