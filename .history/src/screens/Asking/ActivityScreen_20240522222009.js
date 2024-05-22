import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import ActivityExtreme from "../../assets/images/activity_extreme.png";
import ActivityLess from "../../assets/images/activity_less.png";
import ActivityMedium from "../../assets/images/activity_medium.png";
import ActivityNormal from "../../assets/images/activity_normal.png";
import ActivityVery from "../../assets/images/activity_very.png";
import CustomButton from "../../components/Auth/CustomButton";
const ActivityScreen = () => {
  const { width } = useWindowDimensions();
  const [activity, setActivity] = useState(1);

  const getActivityDetails = (value) => {
    let activityType, image, description, color, colorLinear;
    if (value >= 1 && value < 2) {
      activityType = "Ít vận động";
      image = ActivityLess;
      description =
        "Công việc trên máy tính để bàn hoặc từ xa, chỉ các hoạt động sinh hoạt hàng ngày";
      color = "#B266FD";
      colorLinear = "#E3C7FE";
    } else if (value >= 2 && value < 3) {
      activityType = "Hằng ngày";
      image = ActivityMedium;
      description =
        "Lối sống gắn liền với bàn làm việc và tập thể dục hàng ngày hoặc đi bộ";
      color = "#5285E8";
      colorLinear = "#91B6FF";
    } else if (value >= 3 && value < 4) {
      activityType = "Vừa phải";
      image = ActivityNormal;
      description = [
        "Muốn giảm cân hoặc duy trì cân nặng ổn định",
        "Bị tiểu đường hoặc kháng insulin",
        "Theo chế độ ăn low-carb, keto",
        "Người lớn tuổi muốn hạn chế lượng tinh bột",
      ];
      color = "#B2F042";
      colorLinear = "#DFFFA5";
    } else if (value >= 4 && value < 5) {
      activityType = "Rất tích cực";
      image = ActivityExtreme;
      description = [
        "Khỏe mạnh, hoạt động thể chất ở mức trung bình",
        "Muốn duy trì sức khỏe tổng thể",
        "Luyện tập thể thao nhưng không chuyên nghiệp",
        "Phụ nữ mang thai hoặc cho con bú",
      ];
      color = "#FFC700";
      colorLinear = "#FFE588";
    } else {
      activityType = "Cực kỳ năng động";
      image = ActivityVery;
      description = [
        "Tập luyện thể thao chuyên nghiệp, vận động viên",
        "Lao động chân tay, làm việc nặng nhọc",
        "Trẻ em và vị thanh thiếu niên đang trong giai đoạn phát triển",
        "Muốn tăng cân, cơ bắp",
      ];
      color = "#E55733";
      colorLinear = "#FF9E86";
    }
    return { activityType, image, description, color, colorLinear };
  };

  const { activityType, image, description, color, colorLinear } =
    getActivityDetails(activity);

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
            <Image source={image} style={styles.activity_img} />
          </View>
          <Text style={[styles.activity_type, { color: color }]}>
            {activityType}
          </Text>
          <Text style={styles.activity_text}>
            {description.map((item, index) => (
              <Text key={index} style={styles.bullet_point}>
                {"\u2022"} {item}
              </Text>
            ))}
          </Text>
        </View>
        <View style={[styles.activity_picker_container, { width: width - 60 }]}>
          <View style={[styles.activity_picker, { borderColor: color }]}>
            <Slider
              style={{ width: 230, height: 40 }}
              onValueChange={(value) => setActivity(value)}
              minimumValue={1}
              maximumValue={6}
              minimumTrackTintColor={color}
              maximumTrackTintColor={colorLinear}
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
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F2F1",
  },
  activity_type: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  activity_text: {
    height: 60,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },
  activity_picker_container: {
    flex: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  activity_picker: {
    width: 280,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B266FD",
    borderRadius: 12,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
