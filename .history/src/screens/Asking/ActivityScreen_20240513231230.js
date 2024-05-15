import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import ActivityLess from "../../assets/images/activity_less.png";
import CustomButton from "../../components/Auth/CustomButton";
const ActivityScreen = () => {
  const { width } = useWindowDimensions();
  const [activity, setActivity] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Bạn hoạt động như thế nào?</Text>
      <Text style={styles.sub_text}>
        Mức độ hoạt động của bạn, chúng tôi muốn tạo kế hoạch cá nhân hóa cho
        bạn dựa trên mức độ hoạt động của bạn
      </Text>
      <View style={[styles.activity_container, { width: width - 60 }]}>
        <View style={styles.activity_detail}>
          <View style={styles.activity_img_container}>
            <Image source={ActivityLess} style={styles.activity_img} />
          </View>
          <Text style={styles.activity_type}>Ít vận động</Text>
          <Text style={styles.activity_text}>
            Công việc trên máy tính để bàn hoặc từ xa, chỉ các hoạt động sinh
            hoạt hàng ngày
          </Text>
        </View>
        <View style={[styles.activity_picker_container, { width: width - 60 }]}>
          <View style={styles.activity_picker}>
            <Slider
              style={{ width: 230, height: 40 }}
              minimumValue={1}
              maximumValue={100}
              minimumTrackTintColor="#9ABF5A"
              maximumTrackTintColor="#E7F7CA"
            />
          </View>
        </View>
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tạo kế hoạch cá nhân của bạn" />
      </View>
    </View>
  );
};

export default ActivityScreen;

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
  activity_container: {
    marginTop: 70,
  },
  activity_detail: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  activity_img_container: {
    width: 95,
    height: 95,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F2F1",
  },
  activity_type: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
  },
  activity_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 18,
  },
  activity_picker_container: {
    flex: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 130,
  },
  activity_picker: {
    width: 280,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: .15,
    borderColor: "#9ABF5A",
    borderRadius: 10,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
