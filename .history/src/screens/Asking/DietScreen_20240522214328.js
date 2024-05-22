import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ActivityLess from "../../assets/images/activity_less.png";
import ActivityNormal from "../../assets/images/activity_normal.png";
import ActivityExtreme from "../../assets/images/activity_extreme.png";
import Slider from "@react-native-community/slider";

const DietScreen = () => {
  const { width } = useWindowDimensions();
  const [diet, setDiet] = useState(1);

  const getActivityDetails = (value) => {
    let dietType, image, description;
    if (value >= 1 && value < 20) {
      dietType = "Ít vận động";
      image = ActivityLess;
      description =
        "Công việc trên máy tính để bàn hoặc từ xa, chỉ các hoạt động sinh hoạt hàng ngày";
    } else if (value >= 20 && value < 40) {
      dietType = "Hằng ngày";
      image = ActivityMedium;
      description =
        "Lối sống gắn liền với bàn làm việc và tập thể dục hàng ngày hoặc đi bộ";
    } else if (value >= 40 && value < 60) {
      dietType = "Vừa phải";
      image = ActivityNormal;
      description =
        "Công việc đòi hỏi bạn phải đứng vững (ví dụ: bồi bàn, đưa thư) hoặc 1 giờ tập thể dục 3-5 lần một tuần";
    } else {
      dietType = "Cực kỳ năng động";
      image = ActivityVery;
      description =
        "Dành phần lớn thời gian trong ngày để thực hiện các hoạt động thể chất nặng (chẳng hạn như huấn luyện viên thể hình, thợ nề, biên đạo múa)";
    }
    return { dietType, image, description };
  };

  const { dietType, image, description } = getActivityDetails(activity);
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Chế độ ăn uống của bạn</Text>
      <Text style={styles.sub_text}>
        Mức độ ăn uống của bạn, chúng tôi muốn tạo kế hoạch cá nhân hóa cho bạn
        dựa trên mức độ ăn uống của bạn
      </Text>
    </View>
  );
};

export default DietScreen;

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
});
