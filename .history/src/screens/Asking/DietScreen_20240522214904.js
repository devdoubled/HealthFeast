import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ActivityExtreme from "../../assets/images/activity_extreme.png";
import ActivityLess from "../../assets/images/activity_less.png";
import ActivityNormal from "../../assets/images/activity_normal.png";

const DietScreen = () => {
  const { width } = useWindowDimensions();
  const [diet, setDiet] = useState(1);

  const getDietDetails = (value) => {
    let dietType, image, description;
    if (value >= 1 && value < 33) {
      dietType = "Ít tinh bột";
      image = ActivityLess;
      description =
        "Công việc trên máy tính để bàn hoặc từ xa, chỉ các hoạt động sinh hoạt hàng ngày";
    } else if (value >= 33 && value < 66) {
      dietType = "Tinh bột vừa phải";
      image = ActivityNormal;
      description =
        "Công việc đòi hỏi bạn phải đứng vững (ví dụ: bồi bàn, đưa thư) hoặc 1 giờ tập thể dục 3-5 lần một tuần";
    } else {
      dietType = "Nhiều tinh bột";
      image = ActivityExtreme;
      description =
        "Dành phần lớn thời gian trong ngày để thực hiện các hoạt động thể chất nặng (chẳng hạn như huấn luyện viên thể hình, thợ nề, biên đạo múa)";
    }
    return { dietType, image, description };
  };

  const { dietType, image, description } = getDietDetails(diet);
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Chế độ ăn uống của bạn</Text>
      <Text style={styles.sub_text}>
        Mức độ ăn uống của bạn, chúng tôi muốn tạo kế hoạch cá nhân hóa cho bạn
        dựa trên mức độ ăn uống của bạn
      </Text>
      <View style={[styles.diet_container, { width: width - 60 }]}>
        <View style={styles.diet_detail}>
          <View style={styles.diet_img_container}>
            <Image source={image} style={styles.diet_img} />
          </View>
          <Text style={styles.diet_type}>{dietType}</Text>
          <Text style={styles.diet_text}>{description}</Text>
        </View>
        <View style={[styles.diet_picker_container, { width: width - 60 }]}>
          <View style={styles.diet_picker}>
            <Slider
              style={{ width: 230, height: 40 }}
              onValueChange={(value) => setDiet(value)}
              minimumValue={1}
              maximumValue={100}
              minimumTrackTintColor="#9ABF5A"
              maximumTrackTintColor="#E7F7CA"
            />
          </View>
        </View>
      </View>
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
