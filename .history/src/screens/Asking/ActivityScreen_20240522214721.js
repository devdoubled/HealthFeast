import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image
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
    let activityType, image, description;
    if (value >= 1 && value < 20) {
      activityType = "Ít vận động";
      image = ActivityLess;
      description =
        "Công việc trên máy tính để bàn hoặc từ xa, chỉ các hoạt động sinh hoạt hàng ngày";
    } else if (value >= 20 && value < 40) {
      activityType = "Hằng ngày";
      image = ActivityMedium;
      description =
        "Lối sống gắn liền với bàn làm việc và tập thể dục hàng ngày hoặc đi bộ";
    } else if (value >= 40 && value < 60) {
      activityType = "Vừa phải";
      image = ActivityNormal;
      description =
        "Công việc đòi hỏi bạn phải đứng vững (ví dụ: bồi bàn, đưa thư) hoặc 1 giờ tập thể dục 3-5 lần một tuần";
    } else if (value >= 60 && value < 80) {
      activityType = "Rất tích cực";
      image = ActivityExtreme;
      description =
        "Công việc hoạt động thể chất (chẳng hạn như công nhân xây dựng) hoặc tập thể dục cường độ cao 5-7 lần một tuần";
    } else {
      activityType = "Cực kỳ năng động";
      image = ActivityVery;
      description =
        "Dành phần lớn thời gian trong ngày để thực hiện các hoạt động thể chất nặng (chẳng hạn như huấn luyện viên thể hình, thợ nề, biên đạo múa)";
    }
    return { activityType, image, description };
  };

  const { activityType, image, description } = getActivityDetails(activity);

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
          <Text style={styles.activity_type}>{activityType}</Text>
          <Text style={styles.activity_text}>{description}</Text>
        </View>
        <View style={[styles.activity_picker_container, { width: width - 60 }]}>
          <View style={styles.activity_picker}>
            <Slider
              style={{ width: 230, height: 40 }}
              onValueChange={(value) => setActivity(value)}
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
    width: 100,
    height: 100,
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
    height: 60,
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
    marginTop: 120,
  },
  activity_picker: {
    width: 280,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#9ABF5A",
    borderRadius: 12,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
